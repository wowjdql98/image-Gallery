$(function () {
    $('.img-thumb li').click(function () { 
        //this 부모 li 중 사용자가 클릭한 li
        //그 밑에 이미지 src값 읽음
        var thisSrc = $(this).children().attr('src');
        //메인이미지 변경
        $('.mainimg img').attr('src', thisSrc);
        
    });
        
});