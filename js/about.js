const teamMembers = [
    {
      id: 1,
      name: "Vanessa Martinez",
      image: "https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/438098495_10220942690951734_3445714403802281142_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Qtnbw2n9afAQ7kNvgG_cez2&_nc_zt=23&_nc_ht=scontent.fmex27-1.fna&_nc_gid=AmoYTQ80mPoJK9_AT4mmNHN&oh=00_AYBlm6WNwEbZ3XREFNkwaP_Z9AjAxmLK1x5VchDBRS5dIQ&oe=671F0EF7",
      description: "Miau",
      caracteristica: "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f996.gif"
    },
    {
      id: 2,
      name: "Angel Martinez",
      image: "https://scontent.fmex36-1.fna.fbcdn.net/v/t1.18169-9/14650229_10202396952281385_6626719323710569782_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=UD4zMzwMTa4Q7kNvgFVqqtb&_nc_zt=23&_nc_ht=scontent.fmex36-1.fna&oh=00_AYCkCiy2lgEKgVfUbc8TMStFciHO0t53fA0fNujBlfqFkw&oe=67409F48",
      description: "Miau",
      caracteristica: "https://media1.giphy.com/media/KvI1A7ma7Pk48eZ5as/giphy.gif?cid=790b76116c68sful422vd14h2trs0uuys7ay59fkb89l4vz9&ep=v1_stickers_search&rid=giphy.gif&ct=s"
    },
    {
      id: 3,
      name: "Ariel Martinez",
      image: "https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/351160130_3338103456501930_5568334464244966501_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=MJ7rAguW5TMQ7kNvgH8mJ9H&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=A4Tdr09uy4CKNPpvX5yWK6I&oh=00_AYC6_VmWff-F05xuwIWqFrZN7ruNlP6OnrxZ_FW8cfviVg&oe=671F0AC3",
      description: "Miau",
      caracteristica: "https://i.pinimg.com/originals/15/f8/d9/15f8d95466dea0f7e077705fcc29b702.gif"
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const teamScroll = document.getElementById('teamScroll');
    const teamMembersContainer = document.getElementById('teamMembers');
  
    // Create scrolling cards
    teamMembers.forEach(member => {
      const card = document.createElement('a');
      card.href = `#member-${member.id}`;
      card.className = 'team-card';
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
      `;
      teamScroll.appendChild(card);
    });
  
    // Duplicate cards for infinite scroll
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      teamScroll.appendChild(clone);
    });
  
    // Create detailed member cards
    teamMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.id = `member-${member.id}`;
      memberCard.className = 'member-card';
      memberCard.innerHTML = `
        <img src="${member.image}" alt="${member.name}" class="member-image">
        <div class="member-info">
          <div class="member-header">
            <h2>${member.name}</h2>
            <img src="${member.caracteristica}" alt="Characteristic">
          </div>
          <p class="member-description">${member.description}</p>
        </div>
      `;
      teamMembersContainer.appendChild(memberCard);
    });
  });