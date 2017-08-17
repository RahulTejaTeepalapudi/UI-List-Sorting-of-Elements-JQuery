//============================//
// Author : Rahul Teja T      //
// Created Date : 08/17/2017  //              
//============================//

//IDENTIFYING THE CLICK EVENT OF LANGUAGE SELECTION. HIGHLIGHT THE CLICKED LANGUAGE
$('.li_grp').off('click', '.li_grp_item').on('click', '.li_grp_item', function (event) {
    var $this = $(this);
    $('.li_grp_item').removeClass('languageTrHighlight');
    if (!$this.hasClass("languageTrHighlight")) {
              $this.addClass("languageTrHighlight");
          }else{
          $this.removeClass("languageTrHighlight");
          }
});
//IDENTIFYING THE CLICK EVENT OF "LANGUAGE UP"
$('.btn_up').off('click').on('click', function (event) {
    //Element that needs to be Pushed Up
    var reqTr = $('.languageTrHighlight');
    var index = parseInt(reqTr[0].sectionRowIndex);
    var childCount = parseInt(reqTr.parents('.li_grp').children('.languageTrHighlight').length);
    if (index !== 0) {
        //Move Element Up by One Step
        reqTr.prev().before(reqTr);
    }
});
//IDENTIFYING THE CLICK EVENT OF "LANGUAGE DOWN"
$('.btn_down').off('click').on('click', function (event) {
      //Element that needs to be Pulled Down
    var reqTr = $('.languageTrHighlight');
    var index = parseInt(reqTr[0].sectionRowIndex);
    var childCount = parseInt(reqTr.parents('.li_grp').children('.languageTrHighlight').length);
    //Move Element Down by One Step
    if ((childCount - index) !== 1 ){
        reqTr.next().after(reqTr);
    }
});
