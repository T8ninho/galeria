import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    font-family: "Poppins", sans-serif;
    background: rgba(255,255,255,0.027);
    box-shadow: 0 8px 32px 0 rgba(14,19,82,037);
    backdrop-filter: blur(5px);
    border-bottom-style: double;
    border-color: rgba(255,255,255,0.3);
    

    .container {
    max-width: 80vw;
    margin: 0 auto;
}
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar a {
    text-decoration: none;
    color: #fff;
}
.logo {
    
    padding: 15px;
}

.logo img {
    width: 65px;
    border-radius:7px;
    
}
.logo {
    border-radius:7px;
    transition: 
        translate 0.25s,
        box-shadow 0.25s;
}
.logo:hover {
    translate: 0 -5px ;
}
.list {
    list-style: none;
    display: flex;
    gap: 25px;
    
    padding: 15px;
}
#toggler {
    display: none;
}
.link {
	position: relative;
	display: inline-block;
    font-weight: bold;
}

.link::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 2px;
	background-color: #fff;
	border-radius: 4px;
	scale: 0 1;
	transform-origin: right;
	transition: scale 0.25s;
}
.link:hover::before {
	scale: 1;
	transform-origin: left;
}
.linkActived {
	position: relative;
	display: inline-block;
    font-weight: bold;
}

.linkActived::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 2px;
	background-color: #fff;
	border-radius: 4px;
	scale: 0 1;
	transform-origin: right;
	transition: scale 0.25s;
    scale: 1;
	transform-origin: left;
}
@media screen and (max-width: 1000px) {
    .menu {
        width: 100vw;
        max-height: 0;
        overflow: hidden;
    }
    .navbar {
        flex-wrap: wrap;
    }
    .list {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .navbar label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }
    .burger {
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
        cursor: pointer;
    }
    .bun {
        display: block;
        background-color: #fff;
        height: 3px;
        width: 30px;
        transition: translate 0.2s 0.25s,
        rotate 0.2s;
    }
    #toggler:checked+.burger .bun {
        transition: translate 0.2s,
        rotate 0.2s 0.25s;
    }
    #toggler:checked+.burger .bun--toptp {
        rotate: 45deg;
        translate: 0 15px;
    }
    #toggler:checked+.burger .bun--top {
        rotate: 45deg;
        translate: 0 5px;
    }
    #toggler:checked+.burger .bun--bottom {
        rotate: -45deg;
        translate: 0 -5px;
    }
    #toggler:checked ~ .menu {
        max-height: 100%;
    }
    .logo img {
        width: 65px;
    border-radius:7px;
    }
}

`