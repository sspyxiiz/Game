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