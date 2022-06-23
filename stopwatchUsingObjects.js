function StopWatch(){
    let startTime, endTime, duration = 0;
    let running = false;

    this.start = function(){
        if (running){
            throw new Error('Stop Watch is already running.');
        }

        running = true
        startTime = new Date();
    }

    this.stop = function(){
        if (!running){
            throw new Error('Stop Watch is already stopped.');
        }

        running = false
        endTime = new Date();

        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime, stopTime, duration = 0;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get:function(){
            return duration
        }
    });

};

const sw = new StopWatch();