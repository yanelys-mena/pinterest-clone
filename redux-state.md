user_id: {
    id: 1,
    username: 'Demo',
    email: demo@demo.com,
    photo: 'http://user_profile_photo.png',
    bio: 'user bio info here',
    website: 'http://link_to_site.com',
    hashed_password: 'asfajsfa20%2041'
}


pin_id: {
    id: 1,
    title: 'title',
    description: 'optional description',
    image: 'http://pin_image_here.png',
    link: 'http://link_for_pin.png',
    user_id: 1
}

board_id: {
    id: 1,
    name: 'name',
    secret: 0,
    user_id: 1,
}

pins_boards {

    board_id: {
        id: 1,
        pins: {
            {
                id: 1,
                title: 'title',
                description: 'optional description',
                image: 'http://pin_image_here.png',
                link: 'http://link_for_pin.png',
                user_id: 1
            },
            {
                id: 10,
                title: 'title',
                description: 'optional description',
                image: 'http://pin_image_here.png',
                link: 'http://link_for_pin.png',
                user_id: 1
            }
        
        }
    }
    
}
