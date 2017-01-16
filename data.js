const dataArea = {
	10000: {
			name: '-Goblin Field',
			type: 'sort'
		},
    10001: {
			name: '--Goblin to Asobi',
			maxRandomEncount : 7,
			minRandomEncount : 1,
			randomMonster: [['M10000005', 550000],['M10000004', 550000],['M10000003', 550000],['M10000002', 550000],['M10000001', 450000],['M10000000', 650000]],
			// [['EnemyType','Random(100% = 1000000)']] last
			positionMonster: [[['M10000000', 3]]],
			// [[['EnemyType','EnemyNumber'],[]],]
			bossMonster: [[[['M10000000',3],['M10000000',3]],950000]]//[[[['EnemyType',count]....]'Random(100% = 1000000)']]
		},
    10002: {
			name: '--Stronger Goblin',
			maxRandomEncount : 7,
			minRandomEncount : 1,
			randomMonster: [['M10000006', 150000],['M10000000', 650000]],
			// [['EnemyType','Random(100% = 1000000)']] last
			positionMonster: [[['M10000000', 3]]],
			// [[['EnemyType','EnemyNumber'],[]],]
			bossMonster: [[[['M10000000',3],['M10000000',3]],950000]]//[[[['EnemyType',count]....]'Random(100% = 1000000)']]
		}
};
const dataMonster = {
    M10000000: {
        name: 'Goblin',
      health:{
        hp : 25, sp: 15, mp : 10
      },
			state: {
				str: 5,				int: 5,				dex: 5,				dis : 5,				spd: 5,
        vit: 5,				wis: 5,				agi: 5,				res : 5,				luk: 5
        },
			colorType : 'hsv',
			color : {
          hue  : 50, saturation : 80 , value  : 50
        },
			coordinates : 0,
			protectType : ['None',0],
		exp: {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[1000000 , 'IT0000000' ]],
        parttern: [['OTRAND0',50,'ADDJUDGE'],['NS00100',10,'KA100001'],['OT00000',0,'KA100000']]
    },
	M10000001: {
        name: 'GoblinAxe',
      health:{
        hp : 50, sp: 30, mp : 10
      },
			state: {
				str: 15,				int: 5,				dex: 5,				dis : 5,				spd: 8,
        vit: 10,				wis: 5,				agi: 5,				res : 5,				luk: 5
        },
			colorType : 'hsv',
			color : {
          hue  : 50, saturation : 80 , value  : 50
        },
			coordinates : 'front',
			protectType : ['None',0],
		exp: {str : 10},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[1000000 , 'IT0000000' ]],
        parttern: [['OTCOUNT',3,'KA100100'],['OTRAND0',80,'ADDJUDGE'],['NS00100',10,'KA100002'],['OT00000',0,'KA100000']]
    },
	M10000002: {
		name: 'GoblinMonk',
		health:{
			hp : 80, sp: 20, mp : 10
		},
		state: {
			str: 8,				int: 5,				dex: 8,				dis : 5,				spd: 20,
			vit: 18,				wis: 6,				agi: 18,				res : 5,				luk: 5
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'front',
		protectType : ['Always',0],
		option : { regenHp : 1},
		exp: {str : 10},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[1000000 , 'IT0000000' ]],
        parttern: [['MH00200',300,'ADDJUDGE'],['NS00100',10,'KA100300'],['OTRAND0',50,'ADDJUDGE'],['NM00100',10,'KA300302'],['NS00100',10,'KA100001'],['OT00000',0,'KA100000']]
    },
	M10000003: {
		name: 'GoblinCardinal',
		health:{
			hp : 30, sp: 10, mp : 80
		},
		state: {
			str: 8,				int: 25,				dex: 4,				dis : 5,				spd: 15,
			vit: 5,				wis: 12,				agi: 4,				res : 5,				luk: 10
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'back',
		protectType : ['None',0],
		exp: {str : 10},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[1000000 , 'IT0000000' ]],
		parttern: [['DE10100',2,'ADDJUDGE'],['NM00100',30,'KA300100'],['OTRAND0',10,'ADDJUDGE'],['NM00100',10,'KA300301'],['OTRAND0',10,'ADDJUDGE'],['NM00100',10,'KA300302'],['OTRAND0',10,'ADDJUDGE'],['NM00100',10,'KA300300'],['OT00000',0,'KA300000']]
    },
	M10000004: {
		name: 'GoblinMagician',
		health:{
			hp : 10, sp: 10, mp : 50
		},
		state: {
			str: 8,				int: 50,				dex: 4,				dis : 5,				spd: 15,
			vit: 5,				wis: 40,				agi: 4,				res : 5,				luk: 10
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'back',
		protectType : ['None',0],
		exp: {str : 10},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[1000000 , 'IT0000000' ]],
		parttern: [['NM00200',15,'KA200001'],['NM00100',50,'KA200100'],['OT00000',0,'KA200000']]
    },
	M10000005: {
		name: 'GoblinRouge',
		health:{
			hp : 10, sp: 30, mp : 10
		},
		state: {
			str: 8,				int: 10,				dex: 20,				dis : 100,				spd: 35,
			vit: 5,				wis: 10,				agi: 20,				res : 5,				luk: 10
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		coordinates : 'back',
		protectType : ['None',0],
		exp: {str : 10},
		funds : 10,
		job: 'J00000000',
		tribe: 'T04',
		dropTable: [[1000000 , 'IT0000000' ]],
		parttern: [['NM00100',50,'KA104000'],['OT00000',0,'KA104000']]
    },
	M10000006: {
		name: 'Exp',
		health:{
			hp : 1, sp: 1, mp : 1
		},
		state: {
			str: 1,				int: 1,				dex: 1,				dis : 1,				spd: 1,
			vit: 1,				wis: 1,				agi: 1,				res : 1,				luk: 1
		},
		colorType : 'hsv',
		color : {
			hue  : 50, saturation : 80 , value  : 50
		},
		option : { resPhyPer : 1000, resMagPer : 1000,resPhyNum : 10000, resMagNum : 10000, defPhyPer : 1000, defMagPer : 1000,defPhyNum : 10000, defMagNum : 10000,},
		coordinates : 0,
		protectType : ['None',0],
		exp: {
			str: 1000,				int: 1000,				dex: 1000,				dis : 1000,				spd: 1000,
			vit: 1000,				wis: 1000,				agi: 1000,				res : 1000,				luk: 1000
		},
		funds : 10,
        job: 'J00000000',
        tribe: 'T04',
        dropTable: [[1000000 , 'IT0000000' ]],
        parttern: [['OT00000',0,'KA100000']]
    },
}
const dataSkill = {
	//KA = active , KP = passive
		/*KA000000 : {
		code : 'KA000000',
		name : 'Default',
		rate : 10000// player selected this Skill rate 
		target : ['enemy','individual'], //[ ( self,  friend ,  enemy,  all) , ( individual , multi , all) ]
		specialTarget : {}, // only Jugde Match Target can't Other Target
		priorityTarget : {}, // Jugde Match priority  can Other Target  
		cost : {}, // Null = 0 Cost , hp , mp , sp , count
		delay : {}, // Null = first 0 / last 0  
		healthType : ['Hp'] // Hp or Null = Hp , Sp = Sp , Mp = Mp 
		delayType : 'Charge', // Charge or Cast
		skillType : 'Combat', // Combat or Support
		power : [['Physical',100]], // power[0] = [Physical(atkPhy) , Magical(atkMag) , Hybrid(atkPhy+atkMag /2) , value] power[1~] = [[elementParents,all element] , value(100 = 1) , calculrateType( 0 = PlusMins 1 = Multiply)]
		hitCount : 1, // 0 = only Add Effect 1~ = Damage and Recovery
		hitType : 'Just' // just hit
		defenceType : 'Physical', // Physical , Magical , Hybrid  , Ignore if SupportType have This type  Recovery Value down by Defence Value
		invalid : 'None', // have this Type  frontRow can't protect backRow Targetting
		exp : 'BaseSkill', // explanation
		disorder : { name : , value :  , turn : }
		addEffect : {}, //prefix( Up/Down = Percent Calculrate , Plus/Minus = NumberCalculrate )+ suffix( change Element Target)
		limit : 'None' // Math Equip Weapon can use
	}*/
	KA100000 : {
		code : 'KA100000',
		name : 'Attack',
		target : ['enemy','individual'],
		cost : {},
		delay : {},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : [['Physical',100]],
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
	},
		KA100001 : {
		code : 'KA100001',
		name : 'Double Hit',
		target : ['enemy','multi'],
		cost : {sp : 3},
		delay : {first : 50,last : 50},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : [['Physical',90]],
		hitCount : 2,
		defenceType : 'Physical',
		exp : 'BaseSkill',
	},
	KA100002 : {
		code : 'KA100002',
		name : 'Bash',
		target : ['enemy','individual'],
		cost : {sp : 5},
		delay : {first : 60,last : 20},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : [['Physical',150]],
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
	},
	KA100100 : {
		code : 'KA100100',
		name : 'AddStrength',
		target : ['self','individual'],
		cost : {sp : 5},
		delay : {first : 10,last : 30},
		delayType : 'Charge',
		skillType : 'Combat', 
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		addEffect : { PlusStr : 10}
	},
	KA100300 : {
		code : 'KA100300',
		name : 'ExtendHp',
		target : ['self','individual'],
		cost : {sp : 10},
		delay : {first : 100,last : 20},
		delayType : 'Charge',
		skillType : 'Combat', 
		hitCount : 1,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		addEffect : { UpMaxHp : 10}
	},
	KA200000 : {
		code : 'KA200000',
		name : 'FireBall',
		target : ['enemy','individual'],
		cost : {mp : 5},
		delay : {first : 40},
		delayType : 'Casting',
		skillType : 'Combat', 
		power : [['Magical', 115]],
		hitCount : 3,
		defenceType : 'Magical',
		invalid : 'None',
		exp : 'BaseSkill',
	},
	KA200001 : {
		code : 'KA200001',
		name : 'ManaRecovary',
		target : ['self','individual'],
		cost : {},
		delay : {},
		skillType : 'Support', 
		healthType : ['mp'],
		power : [['Magical', 0],[['healthT','mSp'],30,0]],
		hitCount : 1,
		exp : 'BaseSkill',
	},
	KA200100 : {
		code : 'KA200100',
		name : 'Earth',
		target : ['enemy','all'],
		cost : {mp : 50},
		delay : {first : 100,last : 250},
		delayType : 'Casting',
		skillType : 'Combat', 
		power : [['Magical',150]],
		hitCount : 3,
		defenceType : 'Magical',
		invalid : 'None',
		exp : 'BaseSkill',
	},
	KA300000 : {
		code : 'KA300000',
		name : 'Heal',
		target : ['friend','individual'],
		priorityTarget : {name : 'LowestHp'},
		cost : {mp : 3},
		delay : {},
		skillType : 'Support', 
		power : [['Magical',110]],
		hitCount : 1,
		exp : 'BaseSkill',
	},
		KA300001 : {
		code : 'KA300001',
		name : 'Pray',
		target : ['friend','all'],
		cost : {mp : 10},
		delay : {first : 50,last : 50},
		skillType : 'Support', 
		power : [['Magical',0],[['healthT','mSp'],30,0]],
		hitCount : 1,
	},
		KA300001 : {
		code : 'KA300001',
		name : 'QuickHeal',
		target : ['friend','multi'],
		priorityTarget : {name : 'LowestHp'},
		cost : {mp : 5},
		delayType : 'Casting',
		delay : {first : 10,last : -30},
		skillType : 'Support', 
		power : [['Magical',40]],
		hitCount : 3,
		exp : 'BaseSkill',
	},
		KA300100 : {
			code : 'KA300100',
			name : 'Revival',
			target : ['friend','individual'],
			specialTarget : { name : 'Death'},
			cost : {mp : 30},
			delay : {first : 100,last : 50},
			delayType : 'Casting',
			skillType : 'Support', 
			power : [['Magical',250]],
			hitCount : 1,
			exp : 'BaseSkill',
	},
		KA300300 : {
			code : 'KA300300',
			name : 'HpRegenaration',
			target : ['friend','all'],
			cost : {mp : 10},
			delay : {first : 50,last : 150},
			delayType : 'Casting',
			skillType : 'Support', 
			hitCount : 1,
			exp : 'BaseSkill',
			addEffect : { PlusregenHp : 0.5},
	},
		KA300301 : {
			code : 'KA300301',
			name : 'ManaRegenaration',
			target : ['friend','all'],
			cost : {mp : 10},
			delay : {first : 50,last : 150},
			delayType : 'Casting',
			skillType : 'Support', 
			hitCount : 1,
			exp : 'BaseSkill',
			addEffect : { PlusregenMp : 0.5},
	},
		KA300302 : {
			code : 'KA300302',
			name : 'StaminaRegenaration',
			target : ['friend','all'],
			cost : {mp : 10},
			delay : {first : 50,last : 150},
			delayType : 'Casting',
			skillType : 'Support', 
			hitCount : 1,
			exp : 'BaseSkill',
			addEffect : { PlusregenSp : 0.5},
	},
	KA104000 : {
		code : 'KA104000',
		name : 'Poision',
		target : ['enemy','individual'],
		cost : {sp : 2, mp : 2},
		delay : {first : 100,last : 10},
		delayType : 'Charge',
		skillType : 'Combat', 
		power : [['Physical',1]],
		hitCount : 3,
		defenceType : 'Physical',
		exp : 'BaseSkill',
		disorder : { poision : {name : 'poision',value : 1, turn : 10}}
	}
}
const dataItem = {
	/*IT0000000 : {
		code : 'IT0000000',
		name : 'Short Sword',
		category : 'Weapon',
		type : 'Sword',
		health:{
			Hp : 10, Sp: 10, Mp : 10,
			pHp : 10, pSp: 10, pMp : 10
		},
		state: {
			str: 10,				int: 0,				dex: 0,				dis : 0,				spd: 0,
			vit: 0,				wis: 0,				agi: 0,				res : 0,				luk: 0
		},
		option : {
			atkPhy: 10,defPhyPer: 0,defPhyNum: 0,resPhyPer: 0,resPhyNum: 0,
			atkMag: 0,defMagPer: 0,defMagNum : 0,resMagPer: 0,resMagNum : 0,
			atkPhyTrue: 0 ,atkMagTrue : 0 ,rateHit: 0,rateDodge : 0,rateDis : 0, rateRes : 0 ,
			rateCrt: 0,valCrt : 0, rateHitJust : 0, ratePFD: 0,atkRapid : 0,rateCrtLuk: 0,rateDodgeLuk : 0
		},
		addOption : {},
		elelemnt : {}
	}*/
	IT0000000 : {
		code : 'IT0000000',
		name : 'Short Sword',
		category : 'Weapon',
		type : 'Sword',
		state: {
			str: 10
		},
		option : {
			atkPhy: 10
		},
		exp : 'Simple Sword' 
	},
	IT0000001 : {
		code : 'IT0000001',
		name : 'Wooden Shield',
		category : 'Ammor',
		type : 'Shield',
		option : {
			defPhyPer: 10, defPhyNum: 10
		},
		exp : 'Simple Shield' 
	}
}
const  dataTribe = {
	/*
	T0 : { // T + 0 (rebirthCount / 10) + ~(0~9)  Ribirth - 
	code : 'T0',
	name : 'None',
	state : {
	str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
	vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100 // 100 ==  * 1  150 == *1.5
	}
	element : { } //100 ==  * 1  150 == *1.5
	}
	*/
	T0 : {
		code : 'T0',
		name : 'None',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		elelemnt : {}
	},
	T00 : {
		code : 'T00',
		name : 'Human',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 100,				wis: 100,				agi: 105,				res : 95,				luk: 105
		},
		elelemnt : {}
	},
	T01 : {
		code : 'T01',
		name : 'Machina',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 95,				spd: 100,
			vit: 105,				wis: 95,				agi: 100,				res : 105,				luk: 100
		},
		elelemnt : {}
	},
	T02 : {
		code : 'T02',
		name : 'Draco',
		state : {
			str: 100,				int: 105,				dex: 95,				dis : 100,				spd: 95,
			vit: 100,				wis: 105,				agi: 95,				res : 100,				luk: 100
		},
		elelemnt : {}
	},
	T03 : {
		code : 'T03',
		name : 'Sprit',
		state : {
			str: 100,				int: 100,				dex: 105,				dis : 105,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 95
		},
		elelemnt : {}
	},
	T04 : {
		code : 'T04',
		name : 'Goblin',
		state : {
			str: 105,				int: 95,				dex: 95,				dis : 100,				spd: 105,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		elelemnt : {}
	}
}
const  dataJob = {
	J00000000 : {
		code : 'J00000000',
		name : 'Novice',
		state : {
			str: 100,				int: 100,				dex: 100,				dis : 100,				spd: 100,
			vit: 100,				wis: 100,				agi: 100,				res : 100,				luk: 100
		},
		skill : {
			active : 'KA100000',
			passive : 'KP100000'
		}
		
	}
}
