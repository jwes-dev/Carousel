var SlideShows = {

    slideShow: function (Slides, slideInterval) {
        $(Slides[0]).parent().css({ overflow: "hidden" });
        $(Slides).css({'position': 'absolute'});
        this.slideIndex = -1;
        this.slides = Slides;
        this.isPlaying = true;
        this.timing = 0;
        this.interval = slideInterval;

        this.pause = function () {
            if (this.isPlaying) {
                clearInterval(this.timing);
                this.isPlaying = false;
            }
        };

        this.intervalFunction = function () {
            $(this.slides[this.slideIndex]).fadeOut(this.interval / 2);
            this.slideIndex = (this.slideIndex + 1) % this.slides.length;
            $(this.slides[this.slideIndex]).fadeIn(this.interval / 2);
        }.bind(this);

        this.play = function () {
            this.slideIndex = (this.slideIndex + 1) % this.slides.length;
            try {
                $(this.slides[this.slideIndex]).fadeIn(this.interval / 2);
            }
            catch (e) {

            }
            this.timing = setInterval(this.intervalFunction, this.interval);
            this.isPlaying = true;
        }.bind(this);
    }
};
