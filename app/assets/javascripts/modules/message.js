$(function(){
  function buildHTML(message){
    if (message.image){
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
  $('.Chat-main__messageform__Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__field').append(html);
      $('form')[0].reset();
      $('.Chat-main__field').animate({ scrollTop: $('.Chat-main__field')[0].scrollHeight});
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.Chat-main__messageform__submitbtn').prop('disabled',false);
    });
  })
});

