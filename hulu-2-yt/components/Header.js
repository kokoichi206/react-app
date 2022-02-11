import Image from "next/image";

function Header() {
  return (
    <header className=''>
      <h1>This is the Header</h1>
      <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} />
      {/* <Image src="https://kokoichi0206.mydns.jp/imgs/blog/sakura/endouhikari.jpeg" width={200} height={100} /> */}
      {/* <Image className="object-contain" src="/test_img.png" width={200} height={100} /> */}
    </header>
  );
}

export default Header
