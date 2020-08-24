class Movie{
    constructor(title, duration, category){
        this.title = title;
        this.duration = duration;
        this.category = category;
    }

    watch(){
        return `Kamu menonton film ${this.title} dengan kategori ${this.category} berdurasi ${this.duration}`;
    }

    streamAt(){
        return `Film ${this.title} ditayangkan di Televisi`;
    }
}

class Soundtrack extends Movie{
    constructor(title, duration, category, titleSong, singer){
        super(title, duration, category);
        this.titleSong = titleSong;
        this.singer = singer;
    }

    movieSoundtrack(){
        return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} yang dinyanyikan oleh ${this.singer}`
    }
}

class channel extends Movie{
    constructor(title, duration, category, channelName){
        super(title, duration, category);
        this.channelName = channelName;
    }

    streamAt(){
        return `Film ${this.title} ditayangkan di ${this.channelName}`; 
    }
}
let addMovie = new Movie('Suspicious Partner', 'Romance', '60 minutes');
let addSoundT = new Soundtrack('Suspicious Partner', 'Romance', '60 minutes', 'How do you feel', 'Ridho Majid');
let addChannel = new channel('Suspicious Partner', 'Romance', '60 minutes', 'Netflix');

console.log(addMovie.watch());
console.log(addSoundT.movieSoundtrack());
console.log(addChannel.streamAt());