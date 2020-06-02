<template>
  <div class="upload">
    <el-upload class="avatar-uploader" 
      :action="upload" 
      :data="qiniuData"
      :show-file-list="false" 
      :headers="getAuthHeaders()" 
      :on-remove="handleRemove"
      :limit="limitNum"
      multiple
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :on-success="handleSuccess">
      <img v-if="icon" :src="icon ? icon : imgUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  props:{
    icon:{type:String}
  },
  data() {
    return {
      limitNum:3,
      imageUrl:'',  //传给后台的src
      upload:'https://upload-z1.qiniup.com', //七牛云的上传地址(华北)
      qiniuData:{
        key:'', //图片名字处理
        token:''
      },
      qiniuAddr:'http://qb96m7jgn.bkt.clouddn.com' //七牛云的图片外链地址
    };
  },
  mounted(){
    this.getQiniuToken()
  },
  methods: {
    handleSuccess(res) {
      this.imageUrl = `${this.qiniuAddr}/${res.key}`;
      this.$emit('getFromChild',this.imageUrl)
    },
    handleRemove(){
      // this.imageUrl = "";
    },
    handleExceed() {
      this.$message.warning(
        `当前限制选择${this.limitNum}张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
    beforeUpload(file) {
      
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2; 
      if (!isJPG) { 
        this.$message.error('上传头像图片只能是 JPG 格式!'); 
      } if (!isLt2M) { 
        this.$message.error('上传头像图片大小不能超过 2MB!'); 
      }
      this.qiniuData.key = `upload_pic_${file.name}`

      return isJPG && isLt2M;   
    } ,
    async getQiniuToken(){
      const res=await this.$http.get('/uploadToken')
      this.qiniuData.token = res.data
    }

  }
}
</script>


