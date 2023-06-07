import avatar1 from './avatar1.jpg'
import avatar2 from './avatar2.jpg'
import avatar3 from './avatar3.jpg'
import avatar4 from './avatar4.jpg'
import avatar5 from './avatar5.jpg'


const gallery = [];
for(let i = 1; i <= 6; i++){
    gallery.push(require(`./gallery${i}.jpg`))
}

export {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    gallery,
}