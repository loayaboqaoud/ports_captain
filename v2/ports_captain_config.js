window.PORTS_CAPTAIN_CONFIG = {
  supabase: {
    enabled: true,
    url: "https://hyltwdpjkskgblujnchf.supabase.co",
    publishableKey: "sb_publishable_7AKqIL5WblOjE2ba8NDY_w_tOLbwVR-",
    table: "ports_captain_scores",
    fallbackToLocal: true,
    topN: 25
  },

  game: {
    startCoins: 120,
    startProcessedContainers: 0,
    startYardCapacity: 18,
    maxYardCapacity: 50,
    startBerths: 2,
    maxBerths: 4,
    startTruckSlots: 2,
    maxTruckSlots: 5,
    maxCraneSpeedLevel: 5,

    anchorageQueueLimit: 10,

    initialShips: 3,
    initialSpawnTimer: 1.8,

    spawn: {
      baseInterval: 6.6,
      minInterval: 1.8,
      pressureRampSeconds: 32,
      freeBerthBonus: 0.55,
      lowQueueBonus: 0.25,
      burst1Pressure: 7,
      burst1Chance: 0.14,
      burst1DelayMs: 260,
      burst2Pressure: 11,
      burst2Chance: 0.10,
      burst2DelayMs: 520
    },

    cargo: {
      min: 4,
      maxExtra: 5,
      pressureCargoBonus: 0.28
    },

    waitingPenalty: {
      baseThreshold: 8,
      minThreshold: 5.2,
      pressureFactor: 0.15,
      reason: "Anchorage queue delay"
    },

    unload: {
      baseRate: 0.52,
      craneLevelBonus: 0.28
    },

    truck: {
      cargoPerTrip: 2,
      processingBase: 1.1,
      processingPressureFactor: 0.04
    },

    camera: {
      zoomMin: 0.62,
      zoomMax: 1.5,
      panMinX: -7.5,
      panMaxX: 5.5,
      panMinY: -4.2,
      panMaxY: 4.2
    },

    departure: {
      speedX: 0.0,
      speedY: 1.45,
      messageLife: 5.5,
      messageOffsetX: 0.18,
      messageOffsetY: -0.45
    },

    ui: {
      toastMs: 1200,
      gameOverToastMs: 2400
    }
  },

  upgrades: {
    berth: {
      baseCost: 80,
      extraCostPerLevel: 45
    },
    crane: {
      baseCost: 60,
      extraCostPerLevel: 35
    },
    yard: {
      baseCost: 50,
      extraCostPerStep: 18,
      step: 6
    },
    truck: {
      baseCost: 40,
      extraCostPerLevel: 25
    }
  },

  share: {
    title: "Ports Captain Score"
  },

  messages: {
    departureJokes: [
      "I tug U",
      "You vesseled me",
      "I container U",
      "Happy berth 2 U",
      "Sea U later",
      "You crane my heart",
      "Berth day vibes",
      "Docking fabulous",
      "Cargo you soon",
      "Tide and true"
    ],
    emojis: ["😊","❤️","😍","😘","😉","🤩","🥳","😎"]
  }
};
