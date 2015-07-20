var $video_player, _videoHref, _videoPoster, _videoWidth, _videoHeight, _dataCaption, _player, _isPlaying = false;
jQuery(document).ready(function ($) {
    jQuery(".fancy_video").fancybox({
        type       : "html",
        //  API options
        beforeLoad : function () {
            // build the HTML5 video structure for fancyBox content with specific parameters
            _videoHref   = this.href;
            // validates if data values were passed otherwise set defaults
            _videoPoster = typeof this.element.data("poster")  !== "undefined" ? this.element.data("poster")  :  "";
            _videoWidth  = typeof this.element.data("width")   !== "undefined" ? this.element.data("width")   : 360;
            _videoHeight = typeof this.element.data("height")  !== "undefined" ? this.element.data("height")  : 360;
            _dataCaption = typeof this.element.data("caption") !== "undefined" ? this.element.data("caption") :  "";
            this.title = _dataCaption ? _dataCaption : (this.title ? this.title : "");
            // set fancyBox content and pass parameters
            this.content = "<video id='video_player' src='" + _videoHref + "'  poster='" + _videoPoster + "' width='" + _videoWidth + "' height='" + _videoHeight + "'  controls='controls' preload='none' ></video>";
            // set fancyBox dimensions
            this.width = _videoWidth;
            this.height = _videoHeight;
        },
        afterShow : function () {
            // initialize MEJS player
            var $video_player = new MediaElementPlayer('#video_player', {
                    defaultVideoWidth : this.width,
                    defaultVideoHeight : this.height,
                    success : function (mediaElement, domObject) {
                        //mediaElement.play(); // autoplay video
                    } // success
                });
        }
    });
}); // ready