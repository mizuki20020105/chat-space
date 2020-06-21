$(function(){
  function buildHTML(message){
    if (message.image){
      let html=
      `<div class="Chat__message_name"data-message-id=${message.id}>
      <div class="Chat__message_name__box">
      <div class="Chat__message_name__box__name">
        ${message.user_name} 
        <div class = "Chat__message_name__box__name__time">
        ${message.created_at}
      </div>
      </div>
      <div class = "Chat__message__content">
        ${message.content}
      </div>
      <img class = "Message__image" src="${message.image}">
      </div>
      </div>`
      
      return html;
    } else { 
      let html=
      `<div class="Chat__message_name" data-message-id=${message.id}>
      <div class="Chat__message_name__box">
      <div class="Chat__message_name__box__name">
        ${message.user_name} 
      <div class = "Chat__message_name__box__name__time">
        ${message.created_at}
      </div>
      </div>
      <div class = "Chat__message__content">
        ${message.content}
      </div>
      </div>`
      return html;
    };
  }
  let reloadMessages = function(){
    let last_message_id = $('.Chat__message_name:last').data("message-id")
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data:{id: last_message_id}
    })
    .done(function(messages){
      if(messages.length !== 0){
        let insertHTML = '';
        $.each(messages, function(i,message){
          insertHTML += buildHTML(message)
        });
        $('.Chat-main__field').append(insertHTML);
        $('.Chat-main__field').animate({scrollTop: $('.Chat-main__field')[0].scrollHeight});
      }
    })
    .fail(function(){
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});