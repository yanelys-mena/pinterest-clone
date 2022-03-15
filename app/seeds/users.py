from app.models import db, User


def seed_users():
    demo = User(
        username='Demo',
        email='demo@demo.com',
        password='password',
        photo='https://i.pinimg.com/280x280_RS/7e/0d/42/7e0d4288634224881967d954723021b4.jpg',
        bio='Welcome to my pinterest clone!',
        website='https://github.com/yanelys-mena/pinterest-clone'
    )

    julia = User(
        username='julia',
        email='julia@demo.com',
        password='password',
        photo='https://girlsthatroam.com/wp-content/uploads/2018/09/Black-Women-Travel.jpeg',
        bio='welcome to my inspo page for all things colorful',
        website='https://github.com/yanelys-mena/pinterest-clone'
    )

    adam = User(
        username='adam',
        email='adam@demo.com',
        password='password',
        photo='https://buzzhippy.com/wp-content/uploads/2019/08/Best-Selfie-Poses-For-Guys-To-Look-Stylish-3.jpg',
        bio='hiking, travel, and wedding planning',
        website='https://github.com/yanelys-mena/pinterest-clone',
    )

    cyrano73 = User(
        username='cyrano73',
        email='cyrano73@demo.com',
        password='password',
        photo='https://eddie-hernandez.com/wp-content/uploads/2021/08/Eddie-Hernandez-Online-Dating-Photo.jpg',
        bio='Love all things hiking',
        website='https://github.com/yanelys-mena/pinterest-clone',
    )

    maya = User(
        username='maya',
        email='maya@demo.com',
        password='password',
        photo='https://media.costadelmar.com/images/content/galleries/womens_sunglasses/womens-beach-lifestyle-sunglasses.jpg?imwidth=975',
        bio='Planning my wedding!! Maya and Adam December 2022!',
        website='https://github.com/yanelys-mena/pinterest-clone',
    )

    tara = User(
        username='tara',
        email='tara@demo.com',
        password='password',
        photo='https://media.costadelmar.com/images/content/galleries/womens_sunglasses/womens-beach-lifestyle-sunglasses.jpg?imwidth=975',
        bio='Love traveling the world',
        website='https://github.com/yanelys-mena/pinterest-clone',
    )

    db.session.add(demo)
    db.session.add(julia)
    db.session.add(adam)
    db.session.add(cyrano73)
    db.session.add(maya)
    db.session.add(tara)

    db.session.commit()


# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
