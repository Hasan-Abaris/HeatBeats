import React from "react";

function Youmaylike() {
  const games = [
    {
      title: "Bricky Fall",
      category: "Arcade, 3D",
      link: "https://theme.cloudarcade.net/game/bricky-fall/",
      img: "https://theme.cloudarcade.net/thumbs/bricky-fall-bricky-fall-fc1918d6f946490dba4b4b58ce5494ef-512x512_small.jpeg",
    },
    {
      title: "Super Portal Maze 3D",
      category: "Arcade, 3D",
      link: "https://theme.cloudarcade.net/game/super-portal-maze-3d/",
      img: "https://theme.cloudarcade.net/thumbs/super-portal-maze-3d-super-portal-maze-3d-9be6809f61854e20b9a429016a67a087-512x512_small.jpeg",
    },
    {
      title: "Numbers",
      category: "Puzzle",
      link: "https://theme.cloudarcade.net/game/numbers/",
      img: "https://theme.cloudarcade.net/thumbs/numbers-numbers-71698d5c6c2e4adab06c677adb517ab8-512x512_small.webp",
    },
    {
      title: "Zrist",
      category: "Arcade",
      link: "https://theme.cloudarcade.net/game/zrist/",
      img: "https://theme.cloudarcade.net/thumbs/zrist-zrist-1f966057c17140c492f703cd398d3dea-512x512_small.jpeg",
    },
    {
      title: "Fools Match",
      category: "Puzzle",
      link: "https://theme.cloudarcade.net/game/fools-match/",
      img: "https://theme.cloudarcade.net/thumbs/fools-match-fools-match-b9759e51cb664d4391c17d1951195897-512x512_small.jpeg",
    },
    {
      title: "Squid Squad Mission Revenge",
      category: "Action, Arcade",
      link: "https://theme.cloudarcade.net/game/squid-squad-mission-revenge/",
      img: "https://theme.cloudarcade.net/thumbs/squid-squad-mission-revenge-squid-squad-mission-revenge-9eb7b22cc84949cb91c536d0292845d3-512x512_small.jpeg",
    },
    {
      title: "Winter Warm Up Math",
      category: "Arcade, Puzzle",
      link: "https://theme.cloudarcade.net/game/winter-warm-up-math/",
      img: "https://theme.cloudarcade.net/thumbs/winter-warm-up-math-winter-warm-up-math-37b9d9682fd44cac94b367ae8ed1c09d-512x512_small.jpeg",
    },
    {
      title: "Xmasjong",
      category: "Girls, Puzzle",
      link: "https://theme.cloudarcade.net/game/xmasjong/",
      img: "https://theme.cloudarcade.net/thumbs/xmasjong-xmasjong-a07f01b14e504aab89d66313f703bfbf-512x512_small.jpeg",
    },
    {
      title: "Test Your Love",
      category: "Girls, Boys",
      link: "https://theme.cloudarcade.net/game/test-your-love/",
      img: "https://theme.cloudarcade.net/thumbs/test-your-love-test-your-love-cd38f1d625634db69acec57070840d77-512x512_small.jpeg",
    },
    {
      title: "Pop Christmas",
      category: "Puzzle",
      link: "https://theme.cloudarcade.net/game/pop-christmas/",
      img: "https://theme.cloudarcade.net/thumbs/pop-christmas-pop-christmas-86ffb4a0050742e9b70a58dfe902fb02-512x512_small.jpeg",
    },
    {
      title: "Super Goal",
      category: "Soccer",
      link: "https://theme.cloudarcade.net/game/super-goal/",
      img: "https://theme.cloudarcade.net/thumbs/super-goal-super-goal-0745bc915dd24a4ab9087ed425e8d8c4-512x512_small.jpeg",
    },
    {
      title: "Football Killers Online",
      category: "Sports, Hypercasual",
      link: "https://theme.cloudarcade.net/game/football-killers-online/",
      img: "https://theme.cloudarcade.net/thumbs/football-killers-online-football-killers-online-2e66922f06de4ac4af0db1b96cf588c8-512x512_small.jpeg",
    },
  ];

  return (
    <section className="py-10 px-5 ">
      <h2 className="text-black text-2xl font-bold mb-6 flex items-center gap-2">
        <i className="bi bi-dice-3-fill text-black text-3xl"></i>
        You May Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="new-games-section">
        {games.map((game, index) => (
          <article
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <a href={game.link} target="_blank" rel="noopener noreferrer" className="block">
              <figure className="w-full">
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-52 object-cover border-b-4 border-[#76b900]"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold truncate">{game.title}</h3>
                <div className="text-[#76b900] text-sm truncate mt-1">{game.category}</div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Youmaylike;
