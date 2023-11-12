Proje 1
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.
.

#Answer:

Sirayla en kücük sayiyi bastaki büyükle degistirecegiz
- 
- [22,27,16,2,18,6] > 2 - 22 degistir
- [2,27,16,22,18,6] > 6 - 27 degistir
- [2,6,27,16,22,18] > 16 - 27 degistir
- [2,6,16,27,22,18] > 18 - 27 degistir
- [2,6,16,18,27,22] > 22 - 27 degistir
- [2,6,16,18,22,27] >

Big-O Notation:
n + (n-1) + (n-2) + (n-3) + (n-4) + 1 > 
(n * (n+1)) / 2 > 
(n^2) * n / 2 > 
O(n^2)

max=27, min=2 oldugu icin 18 avg kapsamindadir.

<!-- 2.  -->

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

*Cözüm*

- [7,3,5,8,2,9,4,15,6]
- [2,3,5,8,7,9,4,15,6]
- [2,3,4,8,7,9,5,15,6]
- [2,3,4,5,7,9,8,15,6]
- [2,3,4,5,6,9,8,15,7]
- [2,3,4,5,6,7,8,15,9]
- [2,3,4,5,6,7,8,9,15]

----------------------------------------------------------------
Proje 2
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

[16,21,11,8,12,22]

- [16,21,11] [8,12,22]
- [16,21] [11] - [8,12] [22]
- [16] [21] [11] - [8] [12] [22]
- [16,21] [8,11] [12,22]
- [8,11,12,16,21,22]

------------------------------------------------------------------

Proje 3
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

#Answer#


Root: 5

-           5
-        /    \
-       1      7
-      / \    / \
-     0   3  6   8 
-        / \      \
-       2   4      9


