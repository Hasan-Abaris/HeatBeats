import React from "react";

function Categories() {
  const categories = [
    {
      title: ".IO",
      games: "6 games",
      link: "https://theme.cloudarcade.net/category/io/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/other.png",
    },
    {
      title: "2 Player",
      games: "3 games",
      link: "https://theme.cloudarcade.net/category/2-player/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/2-player.png",
    },
    {
      title: "3D",
      games: "25 games",
      link: "https://theme.cloudarcade.net/category/3d/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/3d.png",
    },
    {
      title: "Action",
      games: "23 games",
      link: "https://theme.cloudarcade.net/category/action/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/actions.png",
    },
    {
      title: "Adventure",
      games: "25 games",
      link: "https://theme.cloudarcade.net/category/adventure/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/adventure.png",
    },
    {
      title: "Arcade",
      games: "107 games",
      link: "https://theme.cloudarcade.net/category/arcade/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/arcade.png",
    },
    {
      title: "Baby",
      games: "3 games",
      link: "https://theme.cloudarcade.net/category/baby/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/other.png",
    },
    {
      title: "Bejeweled",
      games: "3 games",
      link: "https://theme.cloudarcade.net/category/bejeweled/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/bejeweled.png",
    },
    {
      title: "Boys",
      games: "8 games",
      link: "https://theme.cloudarcade.net/category/boys/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/other.png",
    },
    {
      title: "Casual",
      games: "1 game",
      link: "https://theme.cloudarcade.net/category/casual/",
      img: "https://theme.cloudarcade.net/content/themes/arcade-three/images/icons-thumbnail/casual.png",
    },
  ];

  return (
    <section className="py-10 px-5 ">
      <h2 className="text-black text-2xl font-bold mb-6">
        <i className="bi bi-grid-fill text-[#76b900] mr-2"></i> Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <a
            key={index}
            href={cat.link}
            className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-4 text-center transition-all duration-200 shadow-lg hover:shadow-[#76b900]/40"
          >
            <figure className="flex justify-center mb-3">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-16 h-16 object-contain"
              />
            </figure>
            <h3 className="text-white font-semibold truncate">{cat.title}</h3>
            <div className="text-[#76b900] text-sm mt-1 truncate">{cat.games}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
