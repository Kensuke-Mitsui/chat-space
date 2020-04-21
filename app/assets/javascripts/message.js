$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="mainChat__content__message">
         <div class="mainchat__content__message__id">
           <div class="mainChat__content__message__id__name">
             ${message.user_name}
           </div>
           <div class="mainChat__content__message__id__date">
             ${message.created_at}
           </div>
         </div>
         <div class="mainChat__content__message__messages">
           <p class="mainChat__content__message__messages__1">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="mainChat__content__message">
         <div class="mainChat__content__message__id">
           <div class="mainChat__content__message__id__name">
             ${message.user_name}
           </div>
           <div class="mainChat__content__message__id__date">
             ${message.created_at}
           </div>
         </div>
         <div class="mainChat__content__message__messages">
           <p class="mainChat__content__message__messages__1">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.mainChat__content').append(html);
    $('form')[0].reset();
    $('.mainChat__content').animate({ scrollTop: $('.mainChat__content')[0].scrollHeight});
    $('.mainChat__footer__foom__right').attr('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
    $('.mainChat__footer__foom__right').attr('disabled', false);
　});
})
});