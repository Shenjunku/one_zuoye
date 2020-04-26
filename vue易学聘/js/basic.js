//基本信息区域

Vue.component('base-content', {
    data: function () {
        return {
            user_information: this.$root.user_information_a,
            new_students_list: this.$root.new_students_list_a
        }
    },
    template: `
    <div class="base">
                <div class="base_img">
                    <img v-bind:src="user_information.user_img">
                    <div class="editor">
                        编辑
                    </div>
                </div>
                <div class="my_management">
                    <p class="my_management_one">
                        <i class="fa fa-user"></i>
                        <span>我的信息</span>
                    </p>
                    <p class="my_management_two">
                        <i class="fa fa-check-circle"></i>
                        <span>认证信息 </span>
                    </p>
                    <p class="my_management_three">
                        <i class="fa fa-cog"></i>
                        <span>密码管理</span>
                    </p>
                </div>
            </div>

    `
})


Vue.component('form-base', {
    data: function () {
        return {
            editor: {
                a:true,
                b:false
            },
            formObj_a: {
                name: '刘芷汐',
                birth: '1990年3月20',
                sex: '女',
                mobile_phone: '15910578034',
                email: 'xuepin@admin.com',
                id_card: '110324199003024357',
                wenxin: '13810194417',
                qq: '367722645'
            },

        }
    },
    template: `
    <div class="form_base">
       <after-submission v-on:counterChange="counterChangeHandler" v-if="editor.a"></after-submission>
       <before-submission v-on:counterChange="counterChangeHandler" v-else="editor.b"></before-submission>
    </div>

    `,
    methods: {
        
        counterChangeHandler(event,bbbb) {
            //console.log("event", event)
            this.formObj_a = event  //接收并更新本身的数据

            this.editor=bbbb
            console.log(bbbb)
        }
    }

})


//显示数据的组件//都是form-base的子组件
Vue.component('after-submission', {
    data: function () {
        return {
            // formObj: this.$root.formObj_a,
            // editor: this.$root.editor,
            formObj: this.$parent.formObj_a,
            editor: this.$parent.editor,

            editor_fu:{
                a:false,
                b:true
            }
        }
    },
    template: `
    <div class="after_submission" >
                    <div class="form_list flex">
                        <div class="form_list_write">
                            姓名
                        </div>
                        <p>{{formObj.name}}</p>
                        <p class="editor_pencil" v-on:click="plusHandler">
                            <i class="fa fa-pencil"></i>
                            <span>编辑</span>
                        </p>
                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                            出生日期
                        </div>
                        <p>{{formObj.birth}}</p>

                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                            性别
                        </div>
                        <p>{{formObj.sex}}</p>

                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                            手机号
                        </div>
                        <p>{{formObj.mobile_phone}}</p>

                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                            邮箱
                        </div>
                        <p>{{formObj.email}}</p>

                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                            身份证
                        </div>
                        <p>{{formObj.id_card}}</p>

                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                            微信号
                        </div>
                        <p>{{formObj.wenxin}}</p>

                    </div>
                    <div class="form_list flex">
                        <div class="form_list_write">
                                QQ号
                        </div>
                        <p>{{formObj.qq}}</p>

                    </div>
                </div>

    `,
    methods: {
        plusHandler() {
           
            this.editor = this.editor_fu
            this.formObj = this.formObj   //更改数据
            this.$emit('counterChange',this.formObj,this.editor)//把更新的数据传给父组件
        }
    },
})

//表单组件  //都是form-base的子组件
Vue.component('before-submission', {
    data: function () {
        return {
            // formObj: this.$root.formObj_a,
            //editor: this.$root.editor,
            formObj: this.$parent.formObj_a,  //获取父组件的数据
            oldformObj:this.$parent.formObj_a,
            editor: this.$parent.editor,

            editor_fu:{
                a:true,
                b:false
            }

        }
    },

    template: `
     <div class="before_submission" v-else="editor.b">
                    <form  >
                        <table>
                            <tr>
                                <td align="right"  class="color">姓名</td>
                                <td> <input  class="base_input" type="text" name="uname" v-model="formObj.name" /></td>
                            </tr>
                            <tr>
                                <td align="right" class="color">出生日期</td>
                                <td> <input disabled="disabled" class="base_input bas_birth" type="text" name=""  placeholder="本项不可输入，填写完身份证信息自动同步出生日期"/></td>
                            </tr>
                            <tr>
                                <td align="right" class="color">性别</td>
                                <td style="position: relative;"> <input  type="text" name="uname" v-model="formObj.sex" class="base_input"/>
                                    <select class="sex_select">
                                        <option >
                                        </option>
                                        <option value="男">男</option>
                                        <option value="女">女</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" class="color">手机号</td>
                                <td style="position:relative"> 
                                    <input  type="text" name="uname" v-model="formObj.mobile_phone" class="base_code" />
                                    <input type="button" value="获取验证码" class="form_code"/>
                                    <p class="yes_btn">
                                        <i class="fa fa-check"></i>
                                        <span>已验证</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" class="color">邮箱</td>
                                <td> <input class="base_input" type="text" name="" v-model="formObj.email" /></td>
                            </tr>
                            <tr>
                                <td align="right" class="color">身份证</td>
                                <td> <input class="base_input" type="text" name="" v-model="formObj.id_card" /></td>
                            </tr>
                            <tr>
                                <td align="right" class="color">微信号</td>
                                <td> <input class="base_input" type="text" name="" v-model="formObj.wenxin" /></td>
                            </tr>
                            <tr>
                                <td align="right"class="color">QQ号</td>
                                <td> <input class="base_input" type="text" name="" v-model="formObj.qq" /></td>
                            </tr>
                            <tr>
                                <th colspan="2">
                                    <input type="button" value="保存信息" v-on:click="plusHandler" class="form_btn form_btn_color"/>
                                    <input type="button" value="取消修改" v-on:click="cancel" class="form_btn"/>
                                </th>

                            </tr>
                        </table>
                    </form>
                </div>
     `,
    methods: {
        plusHandler() {
           
            //event.preventDefault();
             
            this.formObj = this.formObj   //更改数据
            this.editor = this.editor_fu  //切换组件

            this.$emit('counterChange', this.formObj,this.editor)//把更新的数据传给父组件
        },
        cancel(){

            this.editor = this.editor_fu  //切换组件

            this.$emit('counterChange', this.oldformObj,this.editor)//把更新的数据传给父组件
        }
    },
   

})