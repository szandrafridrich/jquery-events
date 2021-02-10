$('button').on('click', () => {
 console.log('Yeah you clicked me');
});
$('.second').on('click', () => {
    $('.second').text('Clicked button');
   });
   $('.third').on('click', () => {
    $('button').css('background-color' , 'purple');
   });