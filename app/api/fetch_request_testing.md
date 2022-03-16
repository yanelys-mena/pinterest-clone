
NOTE NEW PIN!
const form = new FormData()
form.append('title', 'testing')
form.append('description', 'testing')
form.append('image', 'testing')
form.append('link', 'testing')
form.append('user_id', 1)

fetch('/api/pins/', {
    method: "POST",
    body: form
}).then(res => res.json()).then(data => console.log(data));


NOTE UPDATE PIN!
const form = new FormData()
form.append('title', 'EDITED')
form.append('description', 'EDITED')
form.append('image', 'EDITED')
form.append('link', 'EDITED')
form.append('user_id', 1)

fetch('/api/pins/45', {
    method: "PUT",
    body: form
}).then(res => res.json()).then(data => console.log(data));


NOTE DELETE PIN!
fetch('/api/pins/45', {
    method: "DELETE"
}).then(res => res.json()).then(data => console.log(data));

=========================================
NOTE GET BOARDS BY USER
fetch('/api/boards/').then(res => res.json()).then(data => console.log(data));


NOTE NEW BOARD!
const form = new FormData()
form.append('name', 'testing')
form.append('user_id', 1)

fetch('/api/boards/', {
    method: "POST",
    body: form
}).then(res => res.json()).then(data => console.log(data));


NOTE UPDATE BOARD!
const form = new FormData()
form.append('name', 'EDITED')
form.append('user_id', 1)

fetch('/api/boards/12', {
    method: "PUT",
    body: form
}).then(res => res.json()).then(data => console.log(data));


NOTE DELETE BOARD!
fetch('/api/boards/12', {
    method: "DELETE",
}).then(res => res.json()).then(data => console.log(data));

=========================================
NOTE NEW PIN ON BOARD!

fetch('/api/boards/pin-board/', {
    method: "POST",
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pin_id: 1,
        board_id: 13
    })
}).then(res => res.json()).then(data => console.log(data));



fetch('/api/boards/pin-board/', {
    method: "DELETE",
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pin_id: 1,
        board_id: 13
    })
}).then(res => res.json()).then(data => console.log(data));









fetch('/api/pins/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `v1xmhE69-t-W-0whfgeTkxlCKimBRc0NY8q8`
    },
    body: JSON.stringify({
        userId: 1,
        name: 'ORANGE',
        listingType: 'entire apt',
        guests: '4',
        beds: '3',
        bedrooms: '4',
        bathrooms: '1',
        description: 'my updated description',
        address: 'halloway manner',
        city: 'jordan',
        state: 'hillside',
        country: 'Puerto Rico',
        lat: 500,
        lng: 500,
        price: 600.00
    })
}).then(res => res.json()).then(data => console.log(data));



fetch('/api/listings/images').then(res => res.json()).then(data => console.log(data));


