<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">电影院会员管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item>
                    <el-select v-model="param.role" clearable placeholder="登录角色">
                    <el-option key="0" label="管理员" value="manager"></el-option>
                    <el-option key="1" label="会员" value="member"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input v-model="param.id" placeholder="managerId">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { managerLogin, memberLogin } from "@/api/login";
export default {
    data() {
        return {
            param: {
                role: '',
                id: '',
                password: '',
            },
            rules: {
                managerId: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods:{
        submitForm(){
            if (this.param.role == "manager") {
                this.handleManagerLogin();
            }else if(this.param.role == "member"){
                this.handleMemberLogin();
            }else{
                this.$message('请选择角色');
            }
            
        },
        handleManagerLogin(){
            managerLogin(this.param).then(res=>{
                if(res.status==200) {
                    if(res.data){
                        this.$message.success('登录成功');
                        localStorage.setItem('managerId', this.param.id);
                        this.$router.push('/index/dashboard');
                    } 
                    else{
                        this.$message.error('登录失败');
                    }
                }else{
                    this.$message.error('服务器错误');
                }
            })
        },
        handleMemberLogin(){
            memberLogin(this.param).then(res=>{
                if(res.status==200) {
                    if(res.data){
                        this.$message.success('登录成功');
                        localStorage.setItem('memberId', this.param.id);
                        this.$router.push('/memberView');
                    } 
                    else{
                        this.$message.error('登录失败');
                    }
                }else{
                    this.$message.error('服务器错误');
                }
            })
        }
    }
}
</script>

<style>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    /* background-image: url(../../assets/img/login-bg.jpg); */
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #000000;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #000000;
}
</style>