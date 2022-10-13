//Example
//"bitcoin" = current price
//"bitcoin1" = 24hr change
//"bitcoin2" = market cap

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var usdt = document.getElementById("tether");
var sol = document.getElementById("solana");
var ada = document.getElementById("cardano");
var xmr = document.getElementById("monero");
var xlm = document.getElementById("stellar");
var flow = document.getElementById("flow");
var doge = document.getElementById("dogecoin");
var chainlink = document.getElementById("chainlink");

var btc1 = document.getElementById("bitcoin1");
var eth1 = document.getElementById("ethereum1");
var usdt1 = document.getElementById("tether1");
var sol1 = document.getElementById("solana1");
var ada1 = document.getElementById("cardano1");
var xmr1 = document.getElementById("monero1");
var xlm1 = document.getElementById("stellar1");
var flow1 = document.getElementById("flow1");
var doge1 = document.getElementById("dogecoin1");
var chainlink1 = document.getElementById("chainlink1");


var btc2 = document.getElementById("bitcoin2");
var eth2 = document.getElementById("ethereum2");
var usdt2 = document.getElementById("tether2");
var sol2 = document.getElementById("solana2");
var ada2 = document.getElementById("cardano2");
var xmr2 = document.getElementById("monero2");
var xlm2 = document.getElementById("stellar2");
var flow2 = document.getElementById("flow2");
var doge2 = document.getElementById("dogecoin2");
var chainlink2 = document.getElementById("chainlink2");


'use strict';



/**
 * add event on element
 */


 var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Ccardano%2Csolana%2Cflow%2Cdogecoin%2Cmonero%2Cstellar%2Cchainlink&vs_currencies=inr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false",
  "method": "GET",
  "headers": {}
}
$.ajax(settings).done(function (response){
  
  //here bitcoin refers to API ID
  btc.innerHTML= response.bitcoin.inr;
  btc1.innerHTML= response.bitcoin.inr_24h_change;
  btc2.innerHTML= response.bitcoin.inr_market_cap;
  

  eth.innerHTML= response.ethereum.inr;
  eth1.innerHTML= response.ethereum.inr_24h_change;
  eth2.innerHTML= response.ethereum.inr_market_cap;
  

  usdt.innerHTML= response.tether.inr;
  usdt1.innerHTML= response.tether.inr_24h_change;
  usdt2.innerHTML= response.tether.inr_market_cap;

  sol.innerHTML= response.solana.inr;
  sol1.innerHTML= response.solana.inr_24h_change;
  sol2.innerHTML= response.solana.inr_market_cap;


  ada.innerHTML= response.cardano.inr;
  ada1.innerHTML= response.cardano.inr_24h_change;
  ada2.innerHTML= response.cardano.inr_market_cap;


  xmr.innerHTML= response.monero.inr;
  xmr1.innerHTML= response.monero.inr_24h_change;
  xmr2.innerHTML= response.monero.inr_market_cap;


  xlm.innerHTML= response.stellar.inr;
  xlm1.innerHTML= response.stellar.inr_24h_change;
  xlm2.innerHTML= response.stellar.inr_market_cap;


  flow.innerHTML= response.flow.inr;
  flow1.innerHTML= response.flow.inr_24h_change;
  flow2.innerHTML= response.flow.inr_market_cap;


  doge.innerHTML= response.dogecoin.inr;
  doge1.innerHTML= response.dogecoin.inr_24h_change;
  doge2.innerHTML= response.dogecoin.inr_market_cap;


  chainlink.innerHTML= response.chainlink.inr;
  chainlink1.innerHTML= response.chainlink.inr_24h_change;
  chainlink2.innerHTML= response.chainlink.inr_market_cap;





}
);

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);