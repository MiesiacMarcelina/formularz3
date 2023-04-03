var input_imie=document.getElementById('imie');
var formularz = document.getElementById('form');

input_imie.oninvalid = function(event)
{
	event.target.setCustomValidity('Imie jest niepoprawne, musi zaczynac się od dużej litery!');
}; 
input_imie.addEventListener('input', function() 
{
	input_imie.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
});



var input_nazwisko=document.getElementById('nazwisko');

input_nazwisko.oninvalid = function(event2)
{
	event2.target.setCustomValidity('Nazwisko jest niepoprawne, musi zaczynać się od dużej litery! W przypadku dwuczłonowych nazwiska odzielone muszą być  "-"')

}

input_nazwisko.addEventListener('input', function() 
{
	input_nazwisko.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
});


var input_data=document.getElementById('data');

input_data.oninvalid = function(event3)
{
	event3.target.setCustomValidity('Proszę podać datę urodzenia!')
}
input_data.addEventListener('input', function() 
{
	input_data.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
});


var input_miasto=document.getElementById('miasto');

input_miasto.oninvalid = function(event4)
{
	event4.target.setCustomValidity('Nazwa miasta jest niepoprawna, musi zaczynać się od dużej litery! W przypadku wielo członowych nazw odzielone muszą być "-" lub spacją!')
}
input_miasto.addEventListener('input', function() 
	{
	input_miasto.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
  	});


var input_kod=document.getElementById('kod');

input_kod.oninvalid = function(event5)
{
	event5.target.setCustomValidity('Kod pocztowy może skłądać się tylko z cyfr i musi być podany według wzoru: "xx-xxx"')
}
input_kod.addEventListener('input', function() 
	{
	input_kod.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
  	});


var input_ulica=document.getElementById('ulica');

input_ulica.oninvalid = function(event6)
{
	event6.target.setCustomValidity('Ulica jest niepoprawna, musi zaczynać się od dużej litery! W przypadku wielo członowych nazw odzielone muszą być "-" lub spacją!')
}
input_ulica.addEventListener('input', function() 
	{
	input_ulica.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
  	});


var input_numer_domu=document.getElementById('numer_domu');

input_numer_domu.oninvalid = function (event7)
{
	event7.target.setCustomValidity('Numer domu może składać się tylko z cyfr i nie może zaczyanć się od "0"')
}
input_numer_domu.addEventListener('input', function() 
	{
	input_numer_domu.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
  	});


var input_numer_mieszkania=document.getElementById('numer_mieszkania');

input_numer_mieszkania.oninvalid = function (event8)
{
	event8.target.setCustomValidity('Numer mieszkania może składać się tylko z cyfr i nie może zaczyanć się od "0"')
}
input_numer_mieszkania.addEventListener('input', function() 
	{
	input_numer_mieszkania.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
  	});


var input_numer_tel=document.getElementById('numer_tel');

input_numer_tel.oninvalid = function (event9)
{
	event9.target.setCustomValidity('Numer telefonu może składać się tylko z cyfr i musi być podany według wzoru: "xxx-xxx-xxx"')
}
input_numer_tel.addEventListener('input', function() 
	{
	input_numer_tel.setCustomValidity(''); // usuwanie niestandardowej wiadomości błędu
	formularz.reportValidity(); // sprawdzanie poprawności całego formularza
  	});
