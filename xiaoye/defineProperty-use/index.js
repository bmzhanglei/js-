
import {observer} from  './observer.mjs'
;(function (doc){
   var username = doc.querySelector("#username")
   var submitBtn = doc.querySelector("#submitBtn")
   var showuser = doc.querySelector("#showuser")

   var userInfo = observer({username:""},showuser)

   var init = function () {
       bindEvent();
   }

   function bindEvent() {
      submitBtn.addEventListener("click",handleSubmitBtnClick,false)
   };

   function  handleSubmitBtnClick() {
       var _username = username.value.trim()
       _username && (_username !== userInfo.username) && (userInfo.username = _username)
       username.value = ''
    }

    init()
})(document)