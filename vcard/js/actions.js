document.getElementById("accueil").classList.add("section-active");

function changeFocus(target, butt) {
    console.log(target);
    butt++;
    // change page 
    let nameToHide = document.getElementsByClassName('section-active');
    document.getElementById(nameToHide[0].id).classList.add("section-hidden");
    document.getElementById(nameToHide[0].id).classList.remove("section-active");
    document.getElementById(target).classList.remove("section-hidden");
    document.getElementById(target).classList.add("section-active");
    // change menu active
    let menuActive = document.getElementsByClassName('active');
    menuActive[0].classList.remove('active');
    let newMenuItem = document.querySelectorAll("li[name = '" + butt + "']");
    newMenuItem[0].classList.add('active');
}



<section id="wrapper">
        <header class="navbar">
            <section class="navbar-section">
                <a href="#" class="navbar-brand col-mr-auto">John Doe</a>
                <a href="" class="btn btn-link" id="itemme1" onclick="changePage('itemme1');">
                    <li class="nav-item "><i class="fas fa-home"></i>Accueil</li>
                </a>
                <a href="" class="btn btn-link" id="itemme2" onclick="changePage('itemme2');">
                    <li class="nav-item"><i class="fas fa-user"></i>Profile</li>
                </a>
                <a href="" class="btn btn-link" id="item3" onclick="changePage('item3');">
                    <li class="nav-item"><i class="fas fa-user-graduate"></i>Formations</li>
                </a>
                <a href="" class="btn btn-link" id="item4" onclick="changePage('item4');">
                    <li class="nav-item"><i class="fas fa-user-cog"></i>Carrière</li>
                </a>
                <a href="" class="btn btn-link" id="item5" onclick="changePage('item5');">
                    <li class="nav-item"><i class="fas fa-user-cog"></i>Compétences</li>
                </a>
                <a href="" class="btn btn-link" id="item6" onclick="changePage('item6');">
                    <li class="nav-item"><i class="fas fa-user-cog"></i>Intérêts</li>
                </a>
            </section>
        </header>
        <section id="centerPage">

        </section>
    </section>