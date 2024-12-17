// Enum для типів героїв
enum HeroType {
    Warrior = "WARRIOR",
    Mage = "MAGE",
    Archer = "ARCHER"
  }
  
  // Enum для типів атак
  enum AttackType {
    Physical = "PHYSICAL",
    Magical = "MAGICAL",
    Ranged = "RANGED"
  }
  
  // Interface для характеристик героя
  interface HeroStats {
    health: number;
    attack: number;
    defense: number;
    speed: number;
  }
  
  // Interface для героя
  interface Hero {
    id: number;
    name: string;
    type: HeroType;
    attackType: AttackType;
    stats: HeroStats;
    isAlive: boolean;
  }
  
  // Type для результату атаки
  type AttackResult = {
    damage: number;
    isCritical: boolean;
    remainingHealth: number;
  };
  // Функція створення героя
function createHero(name: string, type: HeroType): Hero {
    const baseStats: Record<HeroType, HeroStats> = {
        [HeroType.Warrior]: { health: 120, attack: 20, defense: 15, speed: 10 },
        [HeroType.Mage]: { health: 80, attack: 25, defense: 10, speed: 15 },
        [HeroType.Archer]: { health: 100, attack: 18, defense: 12, speed: 20 },
    };
  
    const id = Math.floor(Math.random() * 1000);
    return {
        id,
        name,
        type,
        attackType: type === HeroType.Mage ? AttackType.Magical : type === HeroType.Archer ? AttackType.Ranged : AttackType.Physical,
        stats: baseStats[type],
        isAlive: true
    };
  }
  
  // Функція розрахунку пошкоджень
  function calculateDamage(attacker: Hero, defender: Hero): AttackResult {
    const baseDamage = attacker.stats.attack - defender.stats.defense;
    const criticalHit = Math.random() < 0.2;
    const damage = Math.max(0, baseDamage * (criticalHit ? 2 : 1));
  
    defender.stats.health -= damage;
    if (defender.stats.health <= 0) {
        defender.isAlive = false;
        defender.stats.health = 0;
    }
  
    return {
        damage,
        isCritical: criticalHit,
        remainingHealth: defender.stats.health
    };
  }
  
  // Generic функція для пошуку героя
  function findHeroByProperty<T extends keyof Hero>(
    heroes: Hero[],
    property: T,
    value: Hero[T]
  ): Hero | undefined {
    return heroes.find(hero => hero[property] === value);
  }