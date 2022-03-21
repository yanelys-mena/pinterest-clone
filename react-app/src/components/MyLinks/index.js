
import './MyLinks.css'

export default function MyLinks() {

    return (
        <div id='linksModal'>
            <div id='about_info'>
                <div id="my_greeting">Hi, my name is</div>
                <div id="my_name">Yanelys Mena</div>
                <div id="my_clone">I am a software engineer and this is my Pinterest clone.</div>
                <div id="my_bell">The little bell you clicked is <a href="https://github.com/yanelys-mena/pinterest-clone" target="_blank" id="my_here_link" rel="noreferrer" >currently in development</a>. I'm building this and <a href="https://github.com/yanelys-mena" target="_blank" id="my_here_link" rel="noreferrer" >a few other things</a>.</div>
                <div id="my_info">I love building apps and I'd like to think that one day I'll be a part of creating something that will be an integral part of a user's every day experience. You can learn more about me <a href="https://www.linkedin.com/in/yanelysmena/" target="_blank" id="my_here_link" rel="noreferrer" >here</a>. </div>
            </div>
        </div>
    );
};

