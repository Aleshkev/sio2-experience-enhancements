# SIO2 Experience Enhancements

[SIO2/OIOIOI](https://github.com/sio2project/oioioi) is a wonderful platform and I'm really glad it is in such common use here in Poland. Really, it is well designed and much better than most&mdash;if not all&mdash;alternatives.

However, it is not completely perfect. I've made these small [Tampermonkey](https://tampermonkey.net) scripts to enhance my user experience myself, as real developers do.

## Usuń "Zadanie"

*Short explanation for non-Polish people:* for no particular reason some tasks on SIO2 begin their names with *Zadanie*, completely redundantly. This script removes these prefixes.

Z niewytłumaczalnych przyczyn (powinienem może kogoś spytać dlaczego, ale na razie AFAIK są to niewytłumaczalne przyczyny; podejrzewam eksportowanie zadań z innego systemu) niektóre zadania na SIO2 zamiast nazywać się po prostu *Wieża, Statystyki, Palindromy* czy *Na odwrót,* nazywają się *Zadanie Wieża, Zadanie Statystyki, Zadanie Palindromy* i *Zadanie Na odwrót.*

Nie byłoby to wielkim problemem, gdyby nie strona do zgłaszania zadań. Gdyż tam jest pole wyboru zadania, do którego chcę zgłosić rozwiązanie.

Nie wszyscy ludzie o tym wiedzą (zwłaszcza ci, którzy używają Linuxa &ndash; co jest bardzo denerwujące gdy większość z nich twierdzi, że ich system jest lepszy, a najwyraźniej nie wiedzą nawet jak działa jeden z podstawowych konceptów interakcji z interfejsem w Windowsie), ale jak mamy rozwijane pole wyboru jednej z opcji to wpisując litery na klawiaturze jesteśmy w stanie szybko znaleźć dokładnie tą, którą chcemy &ndash; bez przewijania nawet listy.

Oczywiście przestaje to działać jeżeli połowa opcji zaczyna się od `Zadanie`. Wyszukując np. *Zadanie Wieża* wpisać najpierw `z`, `a`, `d`, `a`, `n`, `i`, `e`, `␣` (spacja), `w`, `i`. Podczas gdy, jeżeli nie byłoby na początku tekstu `Zadanie`, wystarczyłoby `w`, `i`.

Mam nadzieję, że to co napisałem ma sens, pewnie to kiedyś poprawię jak mi się będzie nudziło.

W każdym razie ten skrypt usuwa we wszystkich prostych (nie zawierających innych elementów wewnątrz) elementach początkowe "Zadanie".
