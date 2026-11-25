/* ISI FILE INI TIAP MINGGU. Satu blok per liga.
   pekan   : nomor pekan yang akan disimpan ke klasemen
   pasangan: nama peserta HARUS sama persis dengan di klasemen (urutan = urutan di sidebar)
   soal    : q = teks soal (LaTeX di antara $...$), a = jawaban, k = pembahasan (boleh kosong), note = catatan operator (opsional)
   Liga yang soalnya masih [] tampil "belum diisi" dan tidak bisa dibuka. */
const LIGA = {
 MRL: {
  nama:'MATHEMATICS ROOKIE LEAGUE', label:'PEKAN IX · LAST MATCH', pekan:9, tahun:2026,
  pasangan:[['Myth','kyou'],['AwanGg','Jual cherry'],['LUTHFI^x','Elrick'],['Senku 297','zky.ga'],['ε<0','Meanrey']],
  soal:[
{q:String.raw`Jika $4x\left(3^{2006}+1\right)=3^{2009}-3^{2007}+24$, maka nilai $x$ yang memenuhi adalah ….`,
 a:String.raw`$x=6$`,k:''},
{q:String.raw`Jika $$P=\sqrt{11-6\sqrt{2}}-\sqrt{7-2\sqrt{10}}=\sqrt{a}-\sqrt{b},$$ maka $a^2+b^2=$ ….`,
 a:'106',k:''},
{q:String.raw`Bilangan asli terkecil lebih dari $2024$ yang bersisa $1$ jika dibagi $2,3,4,5,6,7,8,9$, dan $10$ adalah ….`,
 a:'2521',k:''},
{q:String.raw`Banyaknya bilangan bulat positif $n$ yang memenuhi $n^2-660$ merupakan bilangan kuadrat sempurna adalah ….`,
 a:'4',k:''},
{q:String.raw`Misalkan $x_1,x_2,\ldots,x_{10}$ adalah bilangan-bilangan bulat yang memenuhi persamaan $$x_1+\cdots+x_{10}=2026$$ dan $x_i\ge i$ untuk $i=1,2,\ldots,10$. Tentukan banyaknya solusi dari persamaan tersebut.`,
 a:String.raw`$\dbinom{1980}{9}$ atau $C_{9}^{1980}$`,k:''},
{q:String.raw`Banyaknya bilangan bulat positif $n$ kurang dari $2008$ yang mempunyai tepat $\dfrac{n}{2}$ bilangan kurang dari $n$ dan relatif prima terhadap $n$ adalah ….`,
 a:'10',k:''},
{q:String.raw`Diketahui $$\lim_{n\to\infty}\left(\sum_{k=3}^{n}\frac{k}{k!+(k-1)!+(k-2)!}\right)=\frac{a}{b}$$ dengan $a,b$ relatif prima. Tentukan nilai dari $a^3+b^3$.`,
 a:'9',k:''},
{q:String.raw`Diberikan barisan $a_1=14$ dan $a_k=24-5a_{k-1}$ untuk $k>1$. Barisan $a_n$ dapat dituliskan dalam bentuk $a_n=pq^n+r$ dengan $p,q,r$ konstanta. Nilai $p+q+r$ adalah ….`,
 a:'$-3$',k:''},
{q:String.raw`Tentukan nilai $k$ agar sistem persamaan berikut memiliki tepat $0$ solusi. $$\begin{aligned}2x+y+z&=10,\\ x+y+2z&=20,\\ x-y+kz&=30.\end{aligned}$$`,
 a:'$k=-4$',k:''},
{q:String.raw`Untuk setiap bilangan asli $n$, misalkan $S(n)$ menyatakan hasil jumlah digit-digit $n$ dalam penulisan desimal. Sebagai contoh $S(2026)=2+0+2+6=10$. Hasil jumlah semua bilangan asli $n$ sehingga $n+S(n)=2026$ adalah ….`,
 a:'2021',k:''},
{q:String.raw`Tentukan nilai eksak dari $$\int_{0}^{\infty}\frac{x^{2}\ln(1+x^{3})}{(1+x^{3})^{2}}\,dx.$$`,
 a:String.raw`$\dfrac{1}{3}$`,k:''},
{q:String.raw`Dalam suatu laci terdapat lima pasang kaos kaki yang berbeda. Akan diambil tiga kaos kaki sekaligus secara acak. Banyaknya cara pengambilan sehingga tidak ada kaos kaki yang sepasang adalah ….`,
 a:'80 cara',k:''},
{q:String.raw`Fungsi $G$ didefinisikan sebagai $$G(x)=\int_{0}^{\sin x}\frac{e^{-t^{2}}}{\sin 2t-\cos t}\,dt.$$ Tentukan $G'(-\pi)$.`,
 a:String.raw`$G'(-\pi)=1$`,k:''},
{q:String.raw`Berapa banyak bilangan bulat antara $1$ dan $1000$ yang habis dibagi oleh $3$ atau $5$ tetapi tidak oleh $15$?`,
 a:'400 bilangan',k:''},
{q:String.raw`Jumlah semua nilai $a$ sedemikian sehingga determinan dari matriks berikut $$\begin{pmatrix}1&a\\2a&2\end{pmatrix}$$ merupakan bilangan kuadrat sempurna adalah ….`,
 a:'0',k:''}
]
 },
 MCL: {
  nama:'MATHEMATICS CHAMPIONS LEAGUE', label:'PEKAN IX · LAST MATCH', pekan:9, tahun:2026,
  pasangan:[['Shiro','qwerty'],['(a+bi)GÆL','rquartz'],['mr. sawa ito','eiphi'],['Kumiko','π Radian'],['Arsya','Ken']],
  soal:[]
 }
};
