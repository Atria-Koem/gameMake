const nameState = ['str', 'vit', 'int', 'wis', 'dex', 'agi','dis' ,'res','spd', 'luk'];
const nameOption = ['atkPhy','defPhyPer','defPhyNum','resPhyPer','resPhyNum',
                  'atkMag','defMagPer','defMagNum','resMagPer','resMagNum',
                  'atkPhyTrue','atkMagTrue', 'rateHit','rateDodge','rateDis','rateRes',
                  'rateCrt','valCrt', 'rateHitJust', 'ratePFD','atkRapid','rateCrtLuk','rateDodgeLuk']
const nameColor = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black', 'hue', 'saturation', 'value', 'alpha']
const nameElement = ['normal' , 'fire' , 'water' , 'earth' , 'tree' , 'steel' , 'light' , 'dark']
const nameOptionElement = ['base','atk','def','atkAdd','defAdd','resist']
let mapData={
	lengthX : 0,lengthY : 0,
  map:[],
  solve:[],
	turn: 0 ,
  start : {
    x: 0,    y: 0
  },
  exit : {
    x: 0,    y: 0 
  },
  party : {
    x: 0,    y: 0,
    sigth : 5
  },
	positionOfEnemy : []
};
let areaData = {
	10001 : 30,
	10002 : 550
}
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
class EquipItem{
	constructor(wearerNumber,itemCode,type){
		if(itemCode != 'null'){
		var item = Item.prototype.checkInventory(itemCode)
		if(item === 0){
			return
		}
		var wearer = playerTeam.character[wearerNumber].equip
		var slot = this.checkSlot(item.type)
		var equipSlot = wearer[slot]
		if(!equipSlot.name){}
		else{
			if(!inventoryData[equipSlot.category][equipSlot.code]){
				inventoryData[equipSlot.category][equipSlot.code] = equipSlot
				inventoryData[equipSlot.category][equipSlot.code].number = 1
			}
			else{
				inventoryData[equipSlot.category][equipSlot.code].number += 1;
			}
		}
		playerTeam.character[wearerNumber].equip[slot] = item
			Player.prototype.summaryEquipOption(wearerNumber)
		item.number -= 1;
		if(item.number == 0){
			delete inventoryData[item.category][itemCode]
		}
		}
		else{
			var wearer = playerTeam.character[wearerNumber].equip
			var equipSlot = wearer[type]
			if(!equipSlot.name){}
			else{
				if(!inventoryData[equipSlot.category][equipSlot.code]){
					inventoryData[equipSlot.category][equipSlot.code] = equipSlot
					inventoryData[equipSlot.category][equipSlot.code].number = 1
				}
				else{
					inventoryData[equipSlot.category][equipSlot.code].number += 1;
				}
			}
			playerTeam.character[wearerNumber].equip[type] = {}
			Player.prototype.summaryEquipOption(wearerNumber)
		}

	}
	checkSlot(type){
		var slotName = ''
		switch(type){
			case 'Sword' :
				slotName = 'LeftHand'
				break;
			case 'Shield' :
				slotName = 'RigthHand'
				break;
					 }
		return slotName
	}
}
let inventoryData = {
	Weapon : {},
	Ammor : {},
	Item : {},
	Head : {},
	Other : {}
}
function refreshInventory(){
	
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
var dataName = ['Alent', 'Bastie', 'Ceait','Diman','Eginea','Fiwn','Gaoel']
var playerCharacters = []

class Item{
	constructor(code,refair,type){
		if(type != 'refair'){
			var itemData  = dataItem[code]
			this.baseCode = itemData.code
		}
		else{
			var refairItem = this.checkInventory(code)
			var baseCode = refairItem.baseCode 
			var itemData = dataItem[baseCode]
					this.baseCode = refairItem.baseCode
		}
		this.name = itemData.name;
		this.category = itemData.category;
		this.type = itemData.type;
		this.talent = this.checkTalentValue(code)
		var talentCode = this.talent
		if(talentCode.toString().length != 3 ){
			talentCode = '0' + talentCode
		} 
		if(!(!refair)){
			this.refair = refair
		}
		else if(!itemData.refair){
			this.refair = 0;
		}
		else{
			this.refair = itemData.refair
		}
		var refairCode = (this.refair.toString().length === 2 ) ? this.refair : '0' + this.refair
		this.createOption(itemData)
		var addCode,randomCode
			this.code = this.createCode(this.baseCode, refairCode, talentCode, addCode, randomCode);

		this.number = this.checkOverlap();
		if(!itemData.exp){}
		else{
			this.exp = itemData.exp
		}
		this.inputInventory()
	}
	createOption(itemData){
		var name = Object.getOwnPropertyNames(itemData)
		if(name.indexOf('health') != -1){
			this.health = this.calculrate(itemData.health)
		}
		if(name.indexOf('state') != -1){
			this.state = this.calculrate(itemData.state)
		}
		if(name.indexOf('option') != -1){
			this.option = this.calculrate(itemData.option)
		}
		if(name.indexOf('element') != -1){
			this.element = this.calculrate(itemData.element)
		}
		if(name.indexOf('addOption') != -1 ){
			this.addOption  = this.calculrate(itemData.addOption)
		}
	}
	createCode(base, refair, talent, add, random){
		var code = ''
		var length = base.length
		//switch(length){
		//	case 9 : 
				code = base + refair + talent
		//		break;
		//	case 11 :
		//		code = base + talent
		//		break;
		//	default : 
		//		code = base 
		//		break;
		//						 }
		return code
	}
	inputInventory(){
		var category = this.category
		var code = this.code

			inventoryData[category][code] = this
	}
	checkOverlap(){
		var category = this.category
		var code = this.code
		var number = 0;
		if(!inventoryData[category][code]){
			number = 1
				}
		else{
			number = inventoryData[category][code].number + 1
		}
		return number
	}
	checkTalentValue(code){
		var length = code.length;
		var talent = 0;
		switch(length){
			case 9 :
			case 11 :
				talent =  100 //+ Math.ceil(Math.random() * 100 - 50)
				break;
			default :
				talent = parseInt(code.slice(11,14))
				break;
								 }
		return talent
	}
	checkInventory(itemCode){
		var slotName =  Object.getOwnPropertyNames(inventoryData)
		var slotNameLength = slotName.length
		for(var i = 0; i < slotNameLength ; i++){
			var slotInventory = Object.getOwnPropertyNames(inventoryData[slotName[i]])
			var itemCheck = slotInventory.indexOf(itemCode)
			if(itemCheck != -1){
				break;
			}
		}
		if(i === slotNameLength){
			return 0
		}
		var item = inventoryData[slotName[i]][itemCode]
		return item
	}
	calculrate(type){
		var returnObject = {}
		var name = Object.getOwnPropertyNames(type)
		var length = name.length;
		for(var i = 0 ; i < length ; i++){

			var talentEffect = ['atkPhy','defPhyPer','defPhyNum','atkMag','defMagPer','defMagNum' ]
			var index = talentEffect.indexOf(name[i])
			if(index != -1){
				if(index % 3 === 0){
				returnObject[name[i]] = Math.round(type[name[i]] * ( this.talent / 100) * (1 + Math.pow(this.refair,2) / 100))
				}
				else{
				returnObject[name[i]] = Math.round(type[name[i]] * ( this.talent / 100) * (1 + this.refair * 3 / 100))
				}
			}
			else{
							returnObject[name[i]] = type[name[i]];
			}
		}
		return returnObject;
	}
}
class refairItem /*extends Item*/{
	constructor(code){
		var itemData = Item.prototype.checkInventory(code)
		if(itemData === 0){
			return
		}
		var talent = itemData.talent
		var refair = itemData.refair
		var check = this.checkRefair(refair)
		if(check === 1){
			var refairValue = this.succesRefair(itemData)
			//super(code,refairValue)
			new Item(code,refairValue,'refair')
			console.log('S')
			this.resultRefair(itemData)
		}
		else{
			this.resultRefair(itemData)
			console.log('F')
		}
	}
	checkRefair(refair){
		var refairRate = 100 - Math.pow(refair / Math.E, Math.PI)
		var refairDice = Math.random() * 100
		var returnValue = 0
		if(refairDice < refairRate){
			returnValue = 1
		}
		return returnValue
	}
	resultRefair(itemData){
		if(itemData.number > 1){
				itemData.number -= 1;
			}
			else{
				delete inventoryData[itemData.category][itemData.code];
			}
	}
	succesRefair(itemData){
		var refair = itemData.refair + 1
		return refair
	}
}
class CreateSpec{
	constructor(type){
		this.seed = this.createSeed() 
		this.type = type;		
  	}
  createSeed() {
      var date = new Date();
    	var dateMs = date.getMilliseconds();
    	var dateS = date.getSeconds();
    	var seed = Math.abs((Math.ceil(Math.random() * 9516) % (dateMs - 500)) % (dateS - 30));
    	return seed;
    }
	createState(type, seed, level, base, color) {
		function createSeedValue(target){
			function createTimeSeed(type){
				var time = new Date();
				var milliSeconds = time.getMilliseconds();
				var seconds = time.getSeconds();
				return [seconds , milliSeconds]
				}
			var time = createTimeSeed();
			var milliSeconds = time[1]
			var seconds=time[0]
			var seed = Math.abs(Math.sqrt(Math.pow(Math.ceil(milliSeconds*0.5),Math.random() * 76 - 38) + Math.abs(Math.exp(seconds - 30))) + (Math.pow((seconds + 3),2) + milliSeconds))
			var value = 0;
			value = (Math.ceil((Math.pow(seed,1 / 6) % (Math.random() * 1600) + 400)*Math.abs(seconds - 30) / 30)) % (Math.floor(Math.random() * 100 + 1681) + Math.round(Math.random()*(seed % 400))) + 1
			var sState = (seconds * 5 ) % 12
			var sUpState = -1;
			var sUpValue = (seconds * 3 ) % 10;
			sUpValue = (Math.floor(sUpValue / 5) === 0) ? - (sUpValue % 5) : sUpValue % 5;
			var sValue = {0 : -1, 1 : 0, 2 : 1, 3 : 2, 4 : 3, 5 : 4, 6 : Math.floor(Math.random() * 10), 7 : 5, 8 : 6, 9 : 7, 10 : 8, 11 : 9}
			sUpState = sValue[sState] 
			if(sUpState === target ){
				value += sUpValue
			}
			var msPercent = Math.floor(((milliSeconds % 33) / 3) - 6 * 100) / 10
			var msState = Math.floor((milliSeconds*Math.PI/Math.E) % 30)
			switch(Math.ceil(msState / 10)){
				case 0 :
					msPercent = 0;
					msState = -1
					break;
				case 1 : 
					msPercent = -(msPercent)
					msState = msState % 10
					break;
				case 2 : 
					msPercent = Math.floor(Math.random() * msPercent * 2-msPercent)
					msState = msState % 10
					break;
				case 3 : 
					msPercent = msPercent
					msState = msState % 10
					break;
					
			}
			if(msState === target){
				value = Math.floor(value * (100 + msPercent) / 100)
			}
			if(value > 7320){
				value = 7320
			}
			else if(value === NaN || !value || value === 0){
				value = 10
			}
			else if(value < 0){
				value = Math.ceil(Math.abs(value) * 0.6) + 10
			}			
			return value
		}
		var state = {
		str: 0,	vit: 0,	int: 0,	wis: 0,	dis: 0,	res : 0,
		dex: 0,	agi: 0,	spd: 0,	luk: 0
		};
		if (type === 'player'){
			for(var i = 0; i < 10; i++){		
				var value = Math.round(createSeedValue(i) * (1 + seed / 10))
				if(value === NaN || !value || value < 1){
					value = 1
				}
				state[nameState[i]] = value
				}
		}
		if (type === 'enemy') {
			for (var i = 0; i < 10; i++) {
				state[nameState[i]] = base[nameState[i]] * level + seed
			}
		}
  		return state
	}
	createOption(state){
		var 	option = {
			atkPhy: 0,defPhyPer: 0,defPhyNum: 0,resPhyPer: 0,resPhyNum: 0,
			atkMag: 0,defMagPer: 0,defMagNum : 0,resMagPer: 0,resMagNum : 0,
			atkPhyTrue: 0 ,atkMagTrue : 0 ,rateHit: 0,rateDodge : 0,rateDis : 0, rateRes : 0 ,
			rateCrt: 0,valCrt : 0, rateHitJust : 0, ratePFD: 0,atkRapid : 0,rateCrtLuk: 0,rateDodgeLuk : 0
		}
		option = new Option(0,0,option,state);
		return option
		}
	createColor(type,seed,base){
		var cmyk = 0;
		var rgb = 0;
		var hsv = 0;
		var color =  {}
		switch(type){
			case 'player' :
				color  = { hue: 0,        saturation: 0,        value: 50 , alpha : 0.1 };
				var x = Math.random() * seed * 2 - seed;
				var y = Math.random() * seed * 2 - seed;
				var hue = Math.atan2(x,y) * 180/Math.PI;
				if(hue < 0){
					hue = Math.abs(hue) + 180
				}
				color.hue = hue;
				color = colorConvert('hsv',0,color)
				color.alpha = 0.1;
				break;
			case 'rgb' :
			case 'cmky' :
			case 'hsv' :
				switch(type){
					case 'rgb' :
						var i = 0;
						var j = 3;
						break;
					case 'cmky' :
						var i = 3;
						var j = 7;
						break;
					case 'hsv' :
						var i = 7;
						var j = 10;
						break;

				}
				for(; i < j ; i++){
					var randomSeed = Math.floor(Math.random()*seed*2-seed);
					if(!base[nameColor[i]]){
						color[nameColor[i]] = 0;
					}
					else if(base[nameColor[i]]){
						color[nameColor[i]] = base[nameColor[i]] + randomSeed
						switch( Math.floor(i / 7)){
							case 0 :
								if(color[nameColor[i]] > 255){
									color[nameColor[i]] -= 255;
								}
								else if(color[nameColor[i]] < 0){
									color[nameColor[i]] += 255;
								}
								break;
							case 1 : 
								switch( i ){
									case 7 : 
										if(color[nameColor[i]] > 360){
											color[nameColor[i]] -= 360
										}
										else if(color[nameColor[i]] < 0){
											color[nameColor[i]] += 360
										}
									break;
									default : 
										if(color[nameColor[i]] > 100){
											color[nameColor[i]] = 100
										}
										else if(color[nameColor[i]] < 0){
											color[nameColor[i]] = 0
										}
										break;
								}
								break;
						}
					}
				}
				color = colorConvert(type,0,color)
				break;
			default : 
				color = {
					red: 0,        green: 0,        blue: 0, alpha : 0,
					cyan: 0,        magenta: 0,        yellow: 0,        black: 0,
					hue: 0,        saturation: 0,        value: 0
				}
				break;
		}
		return color;
	}
	createElement(base){
		var element ={}
		for( var i = 0 ; i < 6; i++){
			if(!element[nameOptionElement[i]]){
				element[nameOptionElement[i]] = {}
			}
			for(var j = 0; i < 8; j++){
				element[nameOptionElement[i]][nameElement[i]] = 0;
			}
		}
		element = calculrateElement(0,0,element,base);
		return element
	}
	createBonusState(){
		var seed = Math.abs(this.seed)
		if(seed === 0){
			seed = 1
		}
		var time = new Date();
		var milliSeconds = time.getMilliseconds();
		var seconds = time.getSeconds();
		var seedT = (seconds % 30 + milliSeconds % 120) % 72
		var bonus = Math.round(seedT / (seed))
		if((bonus == NaN || !bonus) && bonus != 0 ){
			bonus = 144
		}
		return bonus

	}
	extendLinkOption(type,state,option,health){
		var extend = {}
		if(health){
			switch(type){
				case 'extend':
					extend.health = {
						mHp : health.hp, mSp : health.sp, mMp : health.mp , 		
						hp : health.hp, sp : health.sp, mp : health.mp
					}
					break;
				case 'copy' : 
					extend = {
						mHp : health.hp, mSp : health.sp, mMp : health.mp , 		
						hp : health.hp, sp : health.sp, mp : health.mp
					}
					break;
			}
		}
		if(state){
			switch(type){
				case 'extend':
					extend.state ={}
					for (var i = 0; i < 10; i++) {
						extend.state[nameState[i]] = state[nameState[i]]
					}
					break;
				case 'copy' :					
					for (var i = 0; i < 10; i++) {
						extend[nameState[i]] = state[nameState[i]]
					}					
					break;
			}
		}
		if(option){
			var name = Object.getOwnPropertyNames(option)
			var length = name.length
			switch(type){
				case 'extend':
					extend.option = {}
					for(var i = 0; i < length ; i++){
						extend.option[name[i]] = option[name[i]]
					}
					break;
				case 'copy' :
					for(var i = 0; i < length ; i++){
						extend[name[i]] = option[name[i]]
					}
					break;
			}
		}
		return extend
	}
}
class Enemy extends CreateSpec{
	constructor(code,level,count,ally,type){
		super('enemy');
		var enemyData = dataMonster[code];
		this.level = level;
		this.name = enemyData.name;
		this.exp = this.createExp(enemyData.exp);
		this.job = enemyData.job
		this.tribe = enemyData.tribe
		var baseState = this.createState('enemy',this.seed, level,enemyData.state)
		this.baseState = baseState
		var state = new State(0,this.baseState,this.job,this.tribe) 
		var health = new Health('enemy',state,0,enemyData.health,this.level);
		var option = this.createOption(state);
		var color = this.createColor(enemyData.colorType,this.seed,enemyData.color);
		this.battle = this.extendLinkOption('extend',state,option,health);
		this.origin = this.extendLinkOption('extend',state,option,health);
		this.add = {option : enemyData.option}
		this.color = color;
		this.funds = enemyData.funds
		this.parttern = this.createParttern(enemyData.parttern)
		this.dropTable = enemyData.dropTable
		this.protectType = enemyData.protectType		
		if(!enemyData.coordinates){
			var coordinates = (Math.round(Math.random())) ? 'back' : 'front'
		}
		else{
			var coordinates = enemyData.coordinates
		}
		this.coordinates = coordinates
		this.type = (!type) ? '' : type
		this.ally = (!ally) ? 'enemy' : ally
		this.code = new CharacterCode(this.ally,this.type).code
	}
	createExp(exp){
		var level = this.level
		var name = Object.getOwnPropertyNames(exp)
		var returnValue = {}
		for(var i = 0, length = name.length; i < length; i++){
			returnValue[name[i]] = Math.round(exp[name[i]] * (1 + (level - 1) / 10) + Math.pow(level, 3 / 2) / 10)
		}
		return returnValue
	}
	createParttern(parttern){
		var returnParttern = []
		for(var i = 0 ,length = parttern.length ; i < length ; i++){
			returnParttern[i] = (parttern[i].slice(0))
		}
		return returnParttern
	}	
}
class CharacterCode{
	constructor(ally,type){
		var code = this.createAllyCode(ally)
		var length = this.createLengthCode(code)
		var random = this.createRandomCode(code,length)
		this.code = code + length + random 
		if(!type){
			var typeCode = this.createTypeCode(type)
			this.code += typeCode
		}
	}
	createAllyCode(ally){
		var code = ''
		switch(ally){
			case 'Enemy' :
			case 'enemy' :
			case 'E' :
				code = 'E'
				break;
			case 'Player' :
			case 'player' :
			case 'P' :
				code = 'P'
				break;
							 }
		return code
	}
	createLengthCode(code){
		if(code === 'E'){
			var length = Object.getOwnPropertyNames(enemyGroup).length % 10
		}
		else if(code === 'P'){
			var length = Object.getOwnPropertyNames(playerTeam.character).length % 10
		}
		return length
	}
	createRandomCode(ally,length){
		do{
			var randomCode = Math.floor(Math.random() * 100000)
			while(randomCode.toString().length != 5){
				randomCode = '0' + randomCode
			}
			var code = ally + length + randomCode
			var check = this.checkCode(code)
			}while(check  != -1)
				return randomCode
	}
	checkCode(code){
		if(code.indexOf('E') != -1){
			var check = Object.getOwnPropertyNames(enemyGroup).indexOf(code)
			}
		else if(code.indexOf('P') != -1){
			var check = Object.getOwnPropertyNames(playerTeam.character).indexOf(code)
			}
		return check
	}
	createTypeCode(type){
		var code = ''
		switch(type){
			case 'summon' :
			case 'Summon' :
			case 'S' :
				code = 'S'
				break;
			default :
				break;
							 }
		return code
	}
}
class Player extends CreateSpec{
	constructor(name,grade){
		super('player');
		if(!name){
			this.name = dataName[Math.floor(Math.random() * dataName.length)]
		}
		else{
			this.name = name
		}
		var level = 1;
		this.level = level;
		this.job = 'J00000000'
		var tribe = Object.getOwnPropertyNames(dataTribe)
		this.tribe = dataTribe[tribe[Math.floor(Math.random() * tribe.length)]].code
		var baseState = this.createState('player',this.seed, level)
		this.baseState = baseState
		var state = new State(0,this.baseState,this.job,this.tribe)
		var health = new Health('player',state);
		var option = this.createOption(state);
		var color = this.createColor('player',this.seed);
		this.battle = this.extendLinkOption('extend',state,option,health);
		this.origin = this.extendLinkOption('extend',state,option,health);
		this.stateExp = this.calculrateStateExp()
		this.add = {}
		this.color = color;
		var coordinates = (Math.round(Math.random())) ? 'back' : 'front'
		this.coordinates = coordinates
		this.ally = 'player'
		this.selected = 1;
		this.parttern = [['OT00000',0,'KA100000']]
		this.skill = {
			active : ['KA100000','KA100001','KA100002','KA200000','KA300001','KA200001'],
			passive : []
		}
		this.code = new CharacterCode(this.ally).code
		this.protectType = ['HP Percent',50]
		this.equip = {
			LeftHand : {},
			RigthHand : {},
			Body : {},
			Head : {},
			Other : {}
		}
		this.bonusState = this.createBonusState()
		this.addPlayerDesk();
	}
	calculrateExp(){
		return Math.floor(Math.pow(this.level,1.735) * 10 / Math.pow(this.level,2 / 5))
	}
	calculrateBattleSpec(number){
		var performer = playerTeam.character[number]
		var battle = performer.battle
		var origin = performer.origin
		var add = performer.add
		var addLength = Object.getOwnPropertyNames(add).length
		if(addLength === 0){
			var add = this.summaryEquipOption(number)
		}
		var addOption = Object.getOwnPropertyNames(add)
		if(addOption.indexOf('health') != -1){
				var health = Object.getOwnPropertyNames(add.health)
				var healthLength = health.length
				for(var j = 0; j < healthLength; j++){
					var target = health[j].slice(0,2)
					if(health[j].indexOf('Percent') === -1){
						battle.health[target] += add.health[health[j]]
					}
					else{
						battle.health[target] += Math.round(origin.health[target] * (add.health[health[j]] / 100))			
					}
				}
			}
			if(addOption.indexOf('option') != -1){
				var option = Object.getOwnPropertyNames(add.option)
				var battleOption = Object.getOwnPropertyNames(battle.option)
				var optionLength = option.length
				for(var j = 0; j < optionLength; j++){
					if(battleOption.indexOf(option[j]) === -1){
						battle.option[option[j]] = 0;
					}
					battle.option[option[j]] += add.option[option[j]]
				}
			}
			if(addOption.indexOf('state') != -1){
				var state = Object.getOwnPropertyNames(add.state)
				var stateLength = state.length
				for(var j = 0; j < stateLength; j++){
					battle.state[state[j]] += add.state[state[j]]
				}				
			}
		
	}
	summaryEquipOption(number,type){
		var performer = playerTeam.character[number]
		var equip = performer.equip
		var equipSlot = Object.getOwnPropertyNames(equip)
		var equipLength = equipSlot.length
		if(!type){
		var itemOption = performer.add = {}
		for( var i = 0 ; i < equipLength; i++ ){
			var nowItem = equip[equipSlot[i]]
			var nowEquipOption = Object.getOwnPropertyNames(nowItem)
			if(nowEquipOption.indexOf('health') != -1){
				var healthOption = itemOption.health = {}
				var health = Object.getOwnPropertyNames(nowItem.health)
				var healthLength = health.length
				for(var j = 0; j < healthLength; j++){
					if(!healthOption[health[j]]){
						healthOption[health[j]] = 0
					}
					healthOption[health[j]] += nowItem.health[health[j]]
				}
			}
			if(nowEquipOption.indexOf('option') != -1){
				var optionOption = itemOption.option = {}
				var option = Object.getOwnPropertyNames(nowItem.option)
				var optionLength = option.length
				for(var j = 0; j < optionLength; j++){
					if(!optionOption[option[j]]){
						optionOption[option[j]] = 0
					}
					optionOption[option[j]] += nowItem.option[option[j]]
				}
			}
			if(nowEquipOption.indexOf('state') != -1){
				var stateOption = itemOption.state = {}
				var state = Object.getOwnPropertyNames(nowItem.state)
				var stateLength = state.length
				for(var j = 0; j < stateLength; j++){
					if(!stateOption[state[j]]){
						stateOption[state[j]] = 0
					}
					stateOption[state[j]] += nowItem.state[state[j]]
				}				
			}
		}
		}
		else if(type === 'View'){
			var itemOption ={ Atk : 0, Matk : 0, Def : {Per : 0, Num : 0}, Mdef : {Per : 0, Num : 0}}
			var targetNameOption = ['atkPhy','atkMag','defPhyPer','defPhyNum','defMagPer','defMagNum']
			var targetNameOptionLength = targetNameOption.length
			for( var i = 0 ; i < equipLength; i++ ){
				var nowItem = equip[equipSlot[i]]
				var nowEquipOption = Object.getOwnPropertyNames(nowItem)
				if(nowEquipOption.indexOf('option') != -1){
					var option = Object.getOwnPropertyNames(nowItem.option)
					for(var j = 0 ; j < targetNameOptionLength; j++){
						if(option.indexOf(targetNameOption[j]) != -1){
							switch(j){
								case 0 :
									itemOption.Atk += nowItem.option[targetNameOption[j]]
									break;
								case 1 :
									itemOption.Matk += nowItem.option[targetNameOption[j]]
									break;
								case 2 :
									itemOption.Def.Per += nowItem.option[targetNameOption[j]]
									break;
								case 3 :
									itemOption.Def.Num += nowItem.option[targetNameOption[j]]
									break;								
								case 4 :
									itemOption.Mdef.Per += nowItem.option[targetNameOption[j]]
									break;								
								case 5 :
									itemOption.Mdef.Num += nowItem.option[targetNameOption[j]]
									break;
											}
						}
					}
			}
		}
		}
		return itemOption
	}
	calculrateStateExp(number,target){
		if(!number && number != 0){
			var state = this.baseState
			var exp = {}
			var level = this.level
		}
		else{
			var performer = playerTeam.character[number]
			var state = performer.baseState
			var exp = performer.stateExp
			var level = performer.level
				}
		var name = Object.getOwnPropertyNames(state)
		if(!target){
			for(var i = 0, length = name.length; i < length; i++){
				exp[name[i]] = Math.ceil (Math.pow(state[name[i]] % 121 , (state[name[i]] / 1331) / 10) * state[name[i]] / 11 + Math.pow(level,1/5) * (11 + Math.pow(level,2/3) / 250)  * state[name[i]] / 11)
			}
			return exp
		}
		else{
			var expValue = Math.ceil (Math.pow(state[target] % 121 , (state[target] / 1331) / 10) * state[target] / 11 + Math.pow(level,1/5) * (11 + Math.pow(level,2/3) / 250)  * state[target] / 11 )
					return expValue
		}

	}
	addPlayerDesk(){
		var desk = document.getElementById('CharacterList');
		var newCharacter = document.createElement('div');
		newCharacter.className = 'CharacterSlot';
		//newCharacter.style.backgroundColor = 'rgba('+ this.color.red + ',' +  this.color.green + ',' +  this.color.blue + ',' + this.color.alpha + ')'
		newCharacter.id = this.code;
		newCharacter.value = this.code
		var name = document.createElement('a');
		name.innerText = this.name
		name.className = 'name'
		var level = document.createElement('a');
		level.innerText = 'Lv. '+ this.level
		level.className = 'level'
		var tribe = document.createElement('a');
		tribe.innerText=  dataTribe[this.tribe].name
		tribe.className = 'tribe'
		//newCharacter.innerText = this.name
		newCharacter.appendChild(name)
		newCharacter.appendChild(tribe)
		newCharacter.appendChild(level)
		newCharacter.addEventListener('dblclick',function(){selectPlayerCharacter(this)})
		newCharacter.addEventListener('click',function(){new CharacterDesk(this)})
		desk.appendChild(newCharacter);
	}
	checkLevelUp(number){
		if(!number && number != 0){
			return
		}
		var performer = playerTeam.character[number]
		var state = performer.baseState
		var exp = performer.stateExp
		var name = Object.getOwnPropertyNames(exp)
		var upCheck = 0;
		var upStateValue = {}
		
		for(var i = 0, length = name.length; i < length; i++){
			upStateValue[name[i]] = 0
			while(exp[name[i]] <= 0){
				upStateValue[name[i]] += 1
				upCheck += 1
				state[name[i]] += 1;
				exp[name[i]] += this.calculrateStateExp(number,[name[i]])
				
			}		

		}
		if(upCheck != 0){
			var levelUpLog = new AddLog([{text : performer.name},{text : 'State Up'}] , 'Battle').log
			for(var i = 0 , length = name.length ; i <length ; i++){
				if(upStateValue[name[i]] != 0){
					new AddLog([{text : performer.name},{text : 'State Upper'},{text : name[i] + '  ' + upStateValue[name[i]]}] , 'Battle',levelUpLog)
				}
			}
			performer.level += upCheck
			performer.health = new Health('player',performer.origin.state)
			if(performer.level % 10 === 0 || upCheck / 10 > 1){
				performer.bonusState += 1
				if(upCheck / 10 > 2){
					performer.bonusState += Math.floor(upCheck / 10 - 1)
				}
			}
			new State(performer)
		}
	}
}
var gaugeStock = {};
var dataActiveCharacter = {};
var playerGroup = {};
var enemyGroup = {};
var battleCheck = 0;
//checkBattleData();
class BattleCharacter{
	constructor(performer,type){
		this.code = performer.code
		this.name = performer.name;
		this.job = performer.job;
		this.tribe= performer.tribe;
		this.level = performer.level;
		if(!performer.title){
		this.title = 0
		}
		else{
			this.title = performer.title
		}
		this.health =performer.extendLinkOption('copy', 0, 0,performer.battle.health)
		this.state = {
			origin : performer.extendLinkOption('copy',performer.origin.state), 
			battle : performer.extendLinkOption('copy',performer.battle.state)};
		this.aria = {}
		this.option = {
			battle : performer.extendLinkOption('copy', 0,performer.battle.option),
			origin : performer.extendLinkOption('copy', 0,performer.origin.option),
			add : performer.extendLinkOption('copy', 0,performer.add.option),
			change : {}			
		}
		this.buff = {}
		this.disorder={}
		this.coordinates = performer.coordinates 
		this.ally = performer.ally
		this.type =  (!type) ? performer.type : type;
		//if(type != 'player'){
			this.parttern = performer.parttern.slice(0)
		//}
		this.protectType = performer.protectType
		if(this.type != 'player'){
			this.dropTable = performer.dropTable
			this.exp = performer.exp
			this.funds = performer.funds
		}
		this.active = 0;
		this.status = 'Live'
	}
}
let battleTurn = 0;
class BattleData{
	constructor(type){
		if(battleCheck != 1 && battleCheck != -1){
			dataActiveCharacter = this.createDataActiveCharacter();
			gaugeStock = this.createGaugeStock();
			battleTurn = 0 ;
			AddLog.prototype.clearLogView('Battle')
			battleCheck = 1;
		}
		else if(battleCheck === -1){
			new AddLog([{text : 'new Enemy Search'}],'Battle')
		}
		else if(battleCheck === 1){
			if(type != 'player'){
			gagueChange()
			}
			else{
				
			}
		}
	}
	createDataActiveCharacter(){
		clearStatusView()
		var activeDataLength = 0
		var activeCharacter = {}
		var playerCode = Object.getOwnPropertyNames(playerGroup)
		var enemyCode = Object.getOwnPropertyNames(enemyGroup)
		var maxLength = Math.max(playerCode.length,enemyCode.length)
		for(var i = 0; i < maxLength; i++){
			if(!playerCode[i]){}
			else if(playerCode[i]){
				var playerSpec = new BattleCharacter(playerGroup[playerCode[i]])
				activeCharacter[playerSpec.code] = playerSpec
				createStatusView(playerSpec)
				activeDataLength++
			}
			if(!enemyCode[i]){}
			else if(enemyCode[i]){
				var enemySpec = new BattleCharacter(enemyGroup[enemyCode[i]])
				activeCharacter[enemySpec.code] = enemySpec
				createStatusView(enemySpec)
				activeDataLength++
			}
		}
		return activeCharacter
	}
	createGaugeStock(){
		var gaugeStock = {};
		var code = Object.getOwnPropertyNames(dataActiveCharacter)
		var length = code.length;
		for(var i = 0; i < length; i++){
			gaugeStock[code[i]] = 0;
    }
		return gaugeStock;
  }
}
class ActionDelay{
	constructor(performer,action,type){		
		if(type === 'fail'){
			gaugeStock[performer.code] -= 100;
			return
		}
		this.action = action
		this.performer = performer
		this.gaugeStock = gaugeStock[performer.code] 
		this.checkDelay(type)
		if(type === 'first' && this.delay === 0){
			return
		}
		this.checkDelayOption()
		this.creatDelayLog(type)
		this.summaryDelay()
		this.checkDelayType(type)
	}
	checkDelay(type){
		var check = Object.getOwnPropertyNames(this.action.delay)
		if(check.indexOf(type) != -1){
			var delay = this.action.delay[type] 
			this.delay = delay
			if(type != 'first'){
				this.delay += 100
			}
		}
		else if(type ==='first'){
			this.delay = 0
		}
		else{
			this.delay = 100
		}
	}
	checkDelayType(type){
		switch(type){
			case 'first' :
				this.performer.aria = {
					skill : this.action.code,
					type : this.action.delayType
				}
				break;
			case 'last' :				
				this.performer.aria = {}
				break;
		}		
	}
	checkDelayOption(){
		var option = this.performer.option.battle
		var optionName = Object.getOwnPropertyNames(option)
		var delayType = this.action.delayType
		var skillType = this.action.skillType
		var delayValue = 1;
		if(optionName.indexOf(delayType + 'Decrease') != -1){
			delayValue *= (1 - option.battle[delayType + 'Decrease'] / 100)
		}
		if(optionName.indexOf(skillType + 'Decrease') != -1){
			delayValue *= (1 - option.battle[skillType + 'Decrease'] / 100)			
		}
		if(delayValue != 1){
			if(this.delay > 0){
				this.delay -= this.delay / delayValue
			}
			else{
				this.delay += this.delay * delayValue
			}
		}
		if(optionName.indexOf('baseDelay') != -1){
			if( this.delay - option.battle.baseDelay > -90){
				this.delay -= option.battle.baseDelay
			}
			else{
				this.delay = -90
			}
		}
	}
	summaryDelay(){
		var code = this.performer.code
		gaugeStock[code] -= this.delay
	}
	creatDelayLog(type){
		var gauge = Math.floor(this.gaugeStock)
		var delay = Math.floor(this.gaugeStock - this.delay)
		switch(type){
			case 'first' :
				new AddLog([{text : this.performer.name, type : 'Name'},{text :  this.action.delayType},{text :  '( '+ gauge + '>>>' + delay + ' )'}] , 'Battle')
				break;
			case 'last' :				
				new AddLog([{text :  '( '+ gauge + '>>>' + delay + ' )'}] , 'Turn')
				break;
		}		
		
	}
}
class ActionCost{
	constructor(performer,action,type){
		this.performer = performer
		this.action = action
		this.countUse = 0;
		this.fail = 0;
		this.cost = action.cost
		this.costName = Object.getOwnPropertyNames(this.cost)
		this.payCost = {}
		this.payCheck = {}
		this.createCostPay()
		this.checkCost()
		this.calculrateCost()
		this.checkPay()
		if(type === 'View'){
			return
		}
		if(this.fail != 0){
			this.addLogFailReason()
			new ActionDelay(performer,action,'fail')
			return
		}
		else{
			this.summaryPayCost(performer)
			changeStatusView(performer)
		}
		
	}
	summaryPayCost(performer){
		var payCostName = Object.getOwnPropertyNames(this.payCost)
		var length = payCostName.length
		for( var i = 0 ; i < length ; i++){
			if(payCostName[i] === 'count'){
				performer.count -= this.payCost[payCostName[i]]
			}
			else{
			performer.health[payCostName[i]] -= this.payCost[payCostName[i]]
			}
		}
	}
	addLogFailReason(){
		var name = Object.getOwnPropertyNames(this.payCheck)
		var length = name.length
		var fail = ''
		for( var i = 0 ; i < length ; i++){
			if(this.payCheck[name[i]] === 0){
				if(fail.length > 0){
					fail += ', '
				}
				fail += name[i]
			}
		}
		new AddLog([{text : this.performer.name, type : 'Name'}, {text : ' lack By  ' + fail}] , 'Battle')
	}
	checkPay(){
		var name = Object.getOwnPropertyNames(this.payCost)
		var length = name.length
		for( var i = 0 ; i < length ; i++){
			this.payCheck[name[i]] = this.checkCostPay(name[i])
		}
	}
	checkCostPay(costType){
		var can = 0;
		switch(costType){
			case 'hp' :
				can = 1;
				break;
			case 'mp' :
			case 'sp' :
				if(this.health[costType] > this.payCost[costType]){
					can = 1
				}
				else{
					this.fail = 1
				}					
				break;
			case 'count' :
				if(this.count > this.playCost[costType]){
					can = 1
				}
				else{
					this.fail = 1
				}
				break;	
									 }
		return can
	}
	createCostPay(){
		this.health = this.performer.health
		if(this.costName.indexOf('count') != -1){
			this.countUse = 1
			this.count = this.performer.count
		}
	}
	checkCost(){
		var costName = this.costName
		var length = costName.length
		for(var i = 0 ; i < length ; i ++){
			var cost = this.inputCost(costName[i])
			this.payCost[cost[1]] = cost[0]
		}
	}
	calculrateCost(){
		var payCostName = Object.getOwnPropertyNames(this.payCost)
		var length = payCostName.length
		for(var i = 0 ; i < length ; i++){
			this.payCost[payCostName[i]] = this.checkEfficient(this.payCost[payCostName[i]],payCostName[i])
		}
	}
	checkEfficient(value,costType){
		var actionOption = this.action.skillType + 'Efficient'
		var delayOption = this.action.delayType + 'Efficient'
		var costOption = costType + 'Efficient'
		var option = this.performer.option.battle
		var optionName = Object.getOwnPropertyNames(option)
		if(optionName.indexOf(costOption) != -1){
			value = value * ( 1 - option[costOption] / 100 )
		}
		if(optionName.indexOf(actionOption) != -1){
			value = value * ( 1 - option[actionOption] / 100 )
		}
		if(optionName.indexOf(delayOption) != -1){
			value = value * ( 1 - option[delayOption] / 100 )
		}
		return value
	}
	inputCost(type){
		var health = this.health
		var cost = 0
		var target = ''
		switch(type){
			case 'pHp' :
				cost = this.cost[type] / 100 * health.mHp
				target = 'hp'
				break;
			case 'pMp' :
				cost = this.cost[type] / 100 * health.mMp
				target = 'mp'
				break;
			case 'pSp' :
				cost = this.cost[type] / 100 * health.mSp
				target = 'sp'
				break;
			case 'hp' :
			case 'mp' :
			case 'sp' :
			case 'count' :
				cost = this.cost[type]
				target = type
				break;
							 }
		return [cost,target]
	}
	
}
class ActionTarget{
	constructor(performer,action,target){
		this.performer = performer
		this.action = action
 //normal & protect return value
		this.targetingType = action.target
		this.ally = performer.ally
		
		if(!target){
			this.checkType = 'first'
		}
		else{
			this.checkType = 'second'
			this.target = target
		}
		this.createTargetData(this.checkType)
		this.summaryTarget(this.checkType)
	}
	createTargetData(type){
		switch(type){
			case 'first' :
				this.targetData = {
					target : [],
					allyProtecter : [],
					enemyProtecter : []
				}
				break;
			case 'second' :
				this.targetData = {
					target : []
				}
				break;
					 }

	}
	summaryTarget(type){
		switch(type){
			case 'first' :
				this.selectFirstTarget()
				this.filterTarget()
				this.returnTarget = this.targetData
				break;
			case 'second' :
				this.selectSecondTarget()
				this.returnTarget = this.targetData.target
				break;
							 }
	}
	selectFirstTarget(){
		var targetType = this.targetingType[0]
		var targetCode = Object.getOwnPropertyNames(dataActiveCharacter)
		var targetData = this.targetData
		var length = targetCode.length;
		switch(targetType){
			case 'self' :
				targetData.target.push(this.performer.code)
				break;
			case 'all' :
				for(var i = 0; i<length ;i++){
					targetData.target.push(targetCode[i])
					var protect = this.protectCheck(targetCode[i])
					if(protect === 1){
						switch(this.ally === dataActiveCharacter[targetCode[i]].ally){
							case true:
								targetData.allyProtecter.push(targetCode[i])
								break;
							case false:
								targetData.enemyProtecter.push(targetCode[i])
								break;
																															 }
					}
				}
				break;
			case 'friend' :
			case 'enemy' :
				for(var i = 0; i<length ;i++){
					if(targetType === 'friend' && this.ally === dataActiveCharacter[targetCode[i]].ally){
						targetData.target.push(targetCode[i])
							var protect = this.protectCheck(targetCode[i])
							if(protect === 1){
								targetData.allyProtecter.push(targetCode[i])
							}
						
					}
					if(targetType === 'enemy' && this.ally != dataActiveCharacter[targetCode[i]].ally){
						targetData.target.push(targetCode[i])
						var protect = this.protectCheck(targetCode[i])
							if(protect === 1){
								targetData.enemyProtecter.push(targetCode[i])
							}
						
					}
				}				
				break;
										 }
		
	}
	selectSecondTarget(){
		var targetType = this.targetingType[1]
		var targetCode = this.target
		var targetLength = targetCode.length;
		var priority = this.action.priorityTarget
		var target = this.targetData.target
			switch(targetType){
				case 'individual' :
				case 'multi' :
					if(!priority){
						var nowTarget = targetCode[Math.floor(Math.random()*targetLength)]
					}
					else if(priority){
						var nowTarget = this.judgeTarget('priority',priority,'target')
						}
					target.push(nowTarget)
					break;
				case 'all' :
					for(var j = 0; j < targetLength; j++){
						target.push(targetCode[j])
					}
					break;
												}
	}
	protectCheck(protecterCode){
		var protecter = dataActiveCharacter[protecterCode]
		var protect = 0;
		if(protecter.coordinates != 'front'){
			return protect
		}
		var protectType = protecter.protectType;
		switch(protectType[0]){
			case 'None' :
			break;
			case 'Always' :
			protect = 1
			break;
			case 'HP Percent' :
			var hpPercent = protecter.health.hp / protecter.health.mHp * 100
			if(hpPercent > protectType[1]){
				protect = 1
			}
			break;
			case 'Random' :
				var random = Math.random() * 100
				if(random < protectType[1]){
					protect = 1
				}
		}
		return protect
	}
	filterTarget(){
		var special = this.action.specialTarget
		var targetData = this.targetData
		if(!special || special.name != 'Death'){
			this.judgeTarget('special',{ name : 'Live'},'target')//this.targetData.target = this.judgeTarget('special',{ name : 'Live'},'target')
			if(targetData.allyProtecter.length != 0){
				this.judgeTarget('special',{ name : 'Live'},'allyProtecter')//this.targetData.allyProtect = this.judgeTarget('special',{ name : 'Live'},'allyProtect')
			}
			if(targetData.enemyProtecter.length != 0){
				this.judgeTarget('special',{ name : 'Live'},'enemyProtecter')//this.targetData.enemyProtect = this.judgeTarget('special',{ name : 'Live'},'enemyProtect')
			}
		}
		if(special){			
			this.judgeTarget('special',special,'target')//this.targetData.target = this.judgeTarget('special',special,'target')
			if(targetData.allyProtecter.length != 0){
				this.judgeTarget('special',special,'allyProtecter')//this.targetData.allyProtect = this.judgeTarget('special',special,'allyProtect')
			}
			if(targetData.enemyProtecter.length != 0){
				this.judgeTarget('special',special,'enemyProtecter')//this.targetData.enemyProtect = this.judgeTarget('special',special,'enemyProtect')
			}
		}
	}
	judgeTarget(type,jugde,targetType){
		//judgeType = disorder , Low/High healthType , Row, state
		switch(type){
			case 'special' :
				var targetCode = this.targetData[targetType]
				var targetLength = targetCode.length;
				for(var i = 0 ; i < targetLength; i++){		
						var jugdeAgree = 0;
						switch(jugde.name){
							case 'Cast': 
								if(dataActiveCharacter[targetCode[i]].aria.type === 'Cast'){
									jugdeAgree= 1;
								}
								break;
							case 'Charge': 
								if(dataActiveCharacter[targetCode[i]].aria.type === 'Charge'){
									jugdeAgree = 1;
								}
								break;							
							case 'Charge&Cast': 
								if(dataActiveCharacter[targetCode[i]].aria.type === 'Cast' || dataActiveCharacter[targetCode[i]].aria.type === 'Charge'){
									jugdeAgree = 1;
								}
								break;
							case 'UnderMaxHp':
								if(dataActiveCharacter[targetCode[i]].health.mHp <= jugde.value){
									jugdeAgree = 1;
								}
								break;
							case 'UpperMaxHp':
								if(dataActiveCharacter[targetCode[i]].health.mHp >= jugde.value){
									jugdeAgree = 1;
								}
								break;
							case 'Death' :
								if(dataActiveCharacter[targetCode[i]].health.hp == 0){
									jugdeAgree = 1;
								}
								break;
							case 'Live' :
								if(dataActiveCharacter[targetCode[i]].health.hp != 0){
									jugdeAgree = 1;
								}
								break;
														 }
						if(jugdeAgree === 0){
							targetCode.splice(i,1)
							i--;
							targetLength--;
						}
					}
					//return targetCode
					break;
				case 'priority' :
				var targetCode = this.target
				var targetLength = targetCode.length;
					var jugdeStock = []
					switch(jugde.name){
						case 'LowestHp' :
							for(var i = 0 ; i < targetLength; i++){
								jugdeStock.push(dataActiveCharacter[targetCode[i]].health.hp / dataActiveCharacter[targetCode[i]].health.mHp)
							}						
							var value = Math.min.apply(null,jugdeStock)
							break;
													 }
					var targetNumber = jugdeStock.indexOf(value)
					return targetCode[targetNumber];
					break;
								 }			
		}
}
class activeAction{
	constructor(actionCode,performer,performerNumber,type){
		if((performerNumber || performerNumber === 0) && performerNumber != -1){
			performer = dataActiveCharacter[performerNumber]
		}
		var action = dataSkill[actionCode]
		var performerNumber = performer.code
		if(type === 'first'){
			var check = new ActionCost(performer,action).fail
			if( check === 1){
				new BattleData(performer.type)
				return
			}
			new ActionDelay(performer,action,'first')
			if(gaugeStock[performerNumber] < 100){
				changeGaugeView(performer)
				new BattleData(performer.type)
				return
			}
		}
		battleTurn += 1
		var turn = battleTurn
		var turnLog = this.turnLog =  new AddLog([{text : 'Turn  '},{text : turn}],'Battle').log
		var targetObject = this.targetObject = new ActionTarget(performer,action).returnTarget //this.selectFirstTarget(performer,action)
		var target =targetObject.target
		if(target.length === 0){
			new AddLog([{text : 'Not Target'}], 'Battle', turnLog)
			return
		}
		var actionType = action.skillType
		new AddLog([{text : performer.name, type : 'Name'},{text : 'Used'},{text : action.name, type : 'SkillName' }], 'Battle', turnLog)
		for(var i = 0 ; i < action.hitCount ; i ++){
			var nowTarget = new ActionTarget(performer,action,target).returnTarget
			var nowTargetLength = nowTarget.length
			if(action.target[1]=='individual'){
				target = nowTarget
			}
			for(var j = 0; j < nowTargetLength; j++){
				var hitTargetCode = this.selectProtect(performer,nowTarget[j],action)
				var hitTarget = dataActiveCharacter[hitTargetCode]
				var hitCheck = this.decisionHit(performer,hitTarget,action)
				if(actionType === 'Support'){
					hitCheck = 1;
				}
				if(!action.disorder){}
				else if(action.disorder){
					var disorder = action.disorder
					var disorderName = Object.getOwnPropertyNames(action.disorder)
					var disorderLength = disorderName.length;
					for( var k = 0 ; k < disorderLength ; k ++){
						var disorderCheck = this.decisionDisorder(performer,hitTarget,disorder[disorderName[k]])
						//console.log(disorderCheck)
						if(disorderCheck === 1 ){
							this.checkDisorderEffect(hitTarget,disorder[disorderName[k]])
						}
					}
				}
				if(!action.power){}
				else{
				if(hitCheck === 1){
					if(!action.healthType){
						var healthType = ['hp']
						var healthTypeLength = 1
					}
					else{
						var healthType = action.healthType 
						var healthTypeLength = healthType.length
					}
					for( var k = 0; k < healthTypeLength; k++){
						var targetHealthData = Math.floor(hitTarget.health[healthType[k]])
						var value = new SkillValue(performer,hitTarget,action,disorderCheck)
						switch(actionType){
						case 'Combat' :
								switch(healthType[k]){
								case 'sp' : 
									var textType = 'SpDamage'
									break;
								case 'mp' :
									var textType = 'MpDamage'
									break;
								default :
								case 'hp' :
									var textType = 'HpDamage'
									break;
																		}
							var printHealthData = Math.floor(hitTarget.health[healthType[k]] - value.value)
							new AddLog([{text : hitTarget.name},{text : healthType[k]},{text : 'Hit'},{text : value.value ,type : textType},{text : '('},{text : targetHealthData,type : textType},{text : '>>' },{text : printHealthData,type : textType},{text :')'}], 'Battle', turnLog)
							hitTarget.health[healthType[k]] -= value.value;
							break;
						case 'Support' :
							var printHealthData = Math.floor(hitTarget.health[healthType[k]] + value.value)
							switch(healthType[k]){
								case 'sp' :
									var maxHealth = hitTarget.health.mSp
									var textType = 'SpRecovery'
									break;
								case 'mp' :
									var maxHealth = hitTarget.health.mMp
									var textType = 'MpRecovery'
									break;
								default :
								case 'hp' :
									var maxHealth = hitTarget.health.mHp
									var textType = 'HpRecovery'
									break;									
																	}
							if(printHealthData > maxHealth){
								printHealthData = maxHealth
							}
							new AddLog([{text : hitTarget.name},{text : healthType[k]},{text : 'Heal'},{text : value.value ,type : textType},{text : '('},{text : targetHealthData,type : textType},{text : '>>' },{text : printHealthData,type : textType},{text :')'}] ,'Battle', turnLog)					
							hitTarget.health[healthType[k]] += value.value;
							if(hitTarget.health[healthType[k]] > maxHealth){
								hitTarget.health[healthType[k]] = maxHealth * 1;
							}
							break;
								 }
					}
				}
					else{
						new AddLog( [{text : hitTarget.name},{text : 'avoid Attack by'},{text : performer.name}], 'Battle', turnLog)
					}
				}	
				if(!action.addEffect){}
					else{
						this.checkAddEffect(hitTarget,action.addEffect)
					}
				changeStatusView(hitTarget)
			}			
		}
			changeStatusView(performer)		
		new ActionDelay(performer,action,'last')
		changeGaugeView(performer)
		new DeathCheck(performer,turnLog)
		new BattleData(performer.type)
		
	}
	selectProtect(performer,target,action){
		var actionType = action.skillType
		var allyProtecter = this.targetObject.allyProtecter
		var enemyProtecter = this.targetObject.enemyProtecter
		if(!action.invlid && actionType != 'Support' && dataActiveCharacter[target].coordinates != 'front'){
					switch(performer.ally === target.ally){
						case true:
							var length = allyProtecter.length
							if(length === 0){
								return target
							}
							var protecter = allyProtecter.slice(0)
							break;
						case false:
							var length = enemyProtecter.length
							if(length === 0){
								return target
							}
							var protecter = enemyProtecter.slice(0)
							break;
																										}
					var protecterLength = protecter.length
					do{
						var nowProtecterNumber = Math.floor(Math.random() * protecterLength )
						var nowProtecter = dataActiveCharacter[protecter.splice(nowProtecterNumber,1)]
						protecterLength = protecter.length
					}while(nowProtecter.health.hp <= 0 && protecterLength > 0)
						if(nowProtecter.health.hp > 0){
							new AddLog([{text : nowProtecter.name},{text : 'Protect for'},{text : dataActiveCharacter[target].name}] , 'Battle', this.turnLog)
							return nowProtecter.code
						}
					}
		return target
				
	}
	decisionHit(performer,target,skill){
		var rateHit = performer.option.battle.rateHit
		var rateDodge = target.option.battle.rateDodge
		var rateDodgeLuk = target.option.battle.rateDodgeLuk
		if(!skill.hitType){
			var hit = 0;
			var dodge = 0;
			var dodgeLuk = rateDodgeLuk
			if(rateHit > 100){
				dodge = rateDodge / (rateHit - 100)
			}
			else{
				dodge = rateDodge
			}
			if( rateDodge > 100){
				hit = rateHit / (rateDodge - 100)
			}
			else{
				hit = rateHit
			}
			var hitDice = Math.random() * 100
			var dodgeDice = Math.random() * 100
			var dodgeLukDice = Math.random() * 100
			if(hitDice <= hit){
				if(dodgeDice > dodge){
					if(dodgeLukDice > dodgeLuk){
						return 1
					}
					else{
						return 0
					}
				}
				else{
					return 0
				}
			}
			else{
				return 0
			}
		}
		else if(skill.hitType === 'Just'){
			return 1;
		}
	}
	decisionDisorder(performer,target,disorder){
			//var disorderType = disorder.name
			//var disorderValue = disorder.value
			var rateDis = performer.option.battle.rateDis
			var rateRes = target.option.battle.rateRes
			//var disorderTypeResist = (!target.disorder.resist[disorderType]) ?  0 : target.disorder.resist[disorderType].value;
			var dis = 0;
			var resist = 0;
			if(rateDis > 100){
				resist = rateRes / (rateDis - 100)
			}
		else{
			resist = rateRes
		}
			if( rateRes > 100){
				dis = rateDis / (rateRes - 100)
			}else{
				dis = rateDis
			}
		var disDice = Math.random() * 100
				var ResDice = Math.random() * 100  
			if(disDice <= dis){
				if(ResDice > resist){
					return 1
				}
				else{
					return 0
				}
			}
			else{
				return 0
			}
		}
	checkDisorderEffect(target,disorder){
		var name = disorder.name
		var value = disorder.value
		var turn = disorder.turn
		var disorderSlot = target.disorder
		if(!disorderSlot[name]){
			disorderSlot[name] = {}
		}
		disorderSlot[name].name = name
		if(!disorderSlot[name].value){
		disorderSlot[name].value = value}
		else{
			disorderSlot[name].value += value
		}
		disorderSlot[name].turn = turn
			new AddLog([{text : target.name},{text : 'get Disorder  ['},{text :  name + ' ] '}], 'Battle', this.turnLog)
	}
	checkAddEffect(target,addEffect){
		var effectType = Object.getOwnPropertyNames(addEffect)
		var length = effectType.length;
		for(var i = 0 ; i < length; i++){
			var calculrateType = ''
			var suffixStart = 0;			
			if(effectType[i].indexOf('Up') != -1){ 
				calculrateType = 'Up'
				suffixStart = 2	
			}
			else if(effectType[i].indexOf('Down') != -1){ 
				calculrateType = 'Down'
				suffixStart = 4
			}
			else if(effectType[i].indexOf('Plus') != -1){ 
				calculrateType = 'Plus'
				suffixStart = 4
			}
			else if(effectType[i].indexOf('Minus') != -1){
				calculrateType = 'Minus'
				suffixStart = 5
			}
			else if(effectType[i].indexOf('Clear') != -1){
				calculrateType = 'Clear'
				suffixStart = 5
			}
			var changeType = effectType[i].slice(suffixStart);
			var changeTarget = ''
			switch(changeType){
				case 'MaxHp' : 
					changeTarget = ['health','mHp']
					break;
				case 'Str' :
					changeTarget = ['state','battle','str']
					break;
				case 'regenHp' :
					changeTarget = ['option','change','regenHp']
					break;
				case 'regenMp' :
					changeTarget = ['option','change','regenMp']
					break;
				case 'regenSp' :
					changeTarget = ['option','change','regenSp']
					break;
				case 'atkPhy' :
					changeTarget = ['option','add','atkPhy']
					break;
					
											 }
			if(changeTarget.length === 2){
				var targetOne = Object.getOwnPropertyNames(target[changeTarget[0]])
				if(targetOne.indexOf(changeTarget[1]) === -1){
					target[changeTarget[0]][changeTarget[1]] = 0;
				}
				switch(calculrateType){
					case 'Up' :
						target[changeTarget[0]][changeTarget[1]] *= (1 + (addEffect[effectType[i]] / 100))
						break;
					case 'Down' :
						target[changeTarget[0]][changeTarget[1]] *= (1 - (addEffect[effectType[i]] / 100))
						break;
					case 'Plus' :
						target[changeTarget[0]][changeTarget[1]] += addEffect[effectType[i]]
						break;
					case 'Minus' :
						target[changeTarget[0]][changeTarget[1]] -= addEffect[effectType[i]]
						break;
					case 'Clear' :
						target[changeTarget[0]][changeTarget[1]] = 0
						break;
														 }
				target[changeTarget[0]][changeTarget[1]] = Math.floor(target[changeTarget[0]][changeTarget[1]])
			}
			else if(changeTarget.length === 3){
				var targetOne = Object.getOwnPropertyNames(target[changeTarget[0]][changeTarget[1]])
				if(targetOne.indexOf(changeTarget[2]) === -1){
					target[changeTarget[0]][changeTarget[1]][changeTarget[2]] = 0;
				}
				switch(calculrateType){
					case 'Up' :
						target[changeTarget[0]][changeTarget[1]][changeTarget[2]] *= (1 + (addEffect[effectType[i]] / 100))
						break;
					case 'Down' :
						target[changeTarget[0]][changeTarget[1]][changeTarget[2]] *= (1 - (addEffect[effectType[i]] / 100))
						break;
					case 'Plus' :
						target[changeTarget[0]][changeTarget[1]][changeTarget[2]] += addEffect[effectType[i]]
						break;
					case 'Minus' :
						target[changeTarget[0]][changeTarget[1]][changeTarget[2]] -= addEffect[effectType[i]]
						break;
					case 'Clear' :
						target[changeTarget[0]][changeTarget[1]][changeTarget[2]] = 0
						break;						
														 }
				//target[changeTarget[0]][changeTarget[1]][changeTarget[2]] = Math.floor(target[changeTarget[0]][changeTarget[1]][changeTarget[2]])
			}
			if(changeTarget[0] === 'state'){
				if(target[changeTarget[0]][changeTarget[1]][changeTarget[2]] > target[changeTarget[0]]['origin'][changeTarget[2]] * 10){
					target[changeTarget[0]][changeTarget[1]][changeTarget[2]] = target[changeTarget[0]]['origin'][changeTarget[2]] * 10
				}
				else if(target[changeTarget[0]][changeTarget[1]][changeTarget[2]] < target[changeTarget[0]]['origin'][changeTarget[2]] / 10){
					target[changeTarget[0]][changeTarget[1]][changeTarget[2]] = target[changeTarget[0]]['origin'][changeTarget[2]] / 10
				}
				else{
					target[changeTarget[0]][changeTarget[1]][changeTarget[2]] = Math.round(target[changeTarget[0]][changeTarget[1]][changeTarget[2]])
				}
			}
			var logText = target.name + '  ' + changeType + ' ' + calculrateType + ' ' + addEffect[effectType[i]]
			new AddLog([{text : target.name},{text : changeType},{text : calculrateType},{text : addEffect[effectType[i]]}], 'Battle', this.turnLog)
		}		
	}
}
class DeathCheck{
	constructor(performer,parentLog){
		this.parentLog = parentLog
		this.performer = performer
		this.checkDeathCharacter()
		this.checkDrop()
		new BattleEnd()
	}
	checkDeathCharacter(){
		var character = dataActiveCharacter
		var checkData = Object.getOwnPropertyNames(character)
		this.death = []
		var length = checkData.length
		for( var i = 0 ; i < length ; i++){
			if(character[checkData[i]].health.hp <= 0 && character[checkData[i]].status != 'Death'){
				character[checkData[i]].health.hp = 0
				character[checkData[i]].status = 'Death'
				this.death.push(checkData[i])
				this.inputDeathLog(checkData[i])
			}
		}
	}
	inputDeathLog(code){
		new AddLog([{text : dataActiveCharacter[code].name, type :'Death'},{text : 'Death', type :'Death'}], 'Battle', this.parentLog)
	}
	checkDrop(){
		var death = this.death
		var length = death.length
		for(var i = 0 ; i < length ; i++){
			new Drop(this.performer, dataActiveCharacter[death[i]])
		}
	}
}
var gInterval;
function gagueChange(number){
	if(Object.getOwnPropertyNames(dataActiveCharacter).indexOf('length') === 0){
		gInterval = clearInterval(gInterval)
		return
	}
	if(!gInterval && !number && number != -1 && number != 0){
	gInterval = setInterval(function(){
			var number = Performer.prototype.checkPerformers()
		gagueChange(number)
	},1)
	}
  if((number === 0 || number) && number != -1 ){

		if(dataActiveCharacter[number].active === 0){
		new Battle(number)
		}
		else{
		gInterval = clearInterval(gInterval)
		}
	}
}
class Performer{
	constructor(number){
		var performerNumber = number
		this.summaryInBattle(performerNumber)
			return dataActiveCharacter[performerNumber]
	}
	/*checkPerformers(){
    var length = dataActiveCharacter.length;
		var lengthE = enemyGroup.length
		var lengthP = playerGroup.length
		var pCount = 0;
		var data = dataActiveCharacter.slice(0)
		var gauge = gaugeStock.slice(0)
		var saveStack = []
		var nowMax = Math.max.apply(null,gaugeStock)
		var sliceCount = 0;
		var check= gaugeStock.indexOf(nowMax)
    while( nowMax <= 100 && data[check].active == 1 ){
    for(var i = 0; i < length; i++){
			if(data[i].health.hp > 0 && gauge[i] < 100){
      gauge[i] += 5000/data[i].option.atkRapid;
			}
			else if(gauge[i] >= 100 && data[i].active == 1){
				gauge.splice(i,1)
				data.splice(i,1)
				i--;
				length--;
				
			}
			else{
				gauge[i] = 0;
			}
    }
			if(pCount != 0){
				for(var i = 0; i < pCount; i++){
					for(var j = 0; j < lengthP; j++){
						var k = j * 2;
						nowMax = Math.max.apply(null,gaugeStock)
						check = gaugeStock.indexOf(nowMax,k)
						if(dataActiveCharacter[check].active != 1){
							
						}
					}
				}
			}
      nowMax = Math.max.apply(null,gaugeStock)
			if(check == gaugeStock.indexOf(nowMax)){
			check = gaugeStock.indexOf(nowMax,check)
			}
			else{
				check = gaugeStock.indexOf(nowMax)
			}
		}
      var returnValue = gaugeStock.indexOf(nowMax)
    return returnValue
  }*/
	createCreateActiveCodeArray(){
		var array = Object.getOwnPropertyNames(dataActiveCharacter)
		return array
	}
	checkPerformers(){
		var array = this.createCreateActiveCodeArray()
    var length = array.length;
		var nowMax = 0
		var maxCode = ''
    //while( nowMax <= 100 ){
    for(var i = 0; i < length; i++){
			this.addGauge(array[i])
			if(nowMax < gaugeStock[array[i]] ){
				nowMax = gaugeStock[array[i]]
				maxCode = array[i]
			}
    }
    //}     
		if(nowMax >= 100){
      var returnValue = maxCode
			}
		else{
			var returnValue = -1
		}
    return returnValue
  }
	addGauge(number){
		if(dataActiveCharacter[number].health.hp != 0){
			var atkRapid = dataActiveCharacter[number].option.battle.atkRapid
			gaugeStock[number] += 5000/atkRapid //(101 - Math.pow(atkRapid,1/2.15)) / 100;
			this.checkChangeStatus(number)
			changeGaugeView(dataActiveCharacter[number])
		}
		else{
			if(gaugeStock[number] != 0){
			gaugeStock[number] = 0;
			changeGaugeView(dataActiveCharacter[number])
			}
		}
	}
	checkChangeStatus(number){
		var performer = dataActiveCharacter[number]
		var changeCheck = 0;
		var option = performer.option.battle
		var disorder = performer.disorder
		var rapid =  5000/option.atkRapid//(101 - Math.pow(option.atkRapid,1/2.15)) / 100//5000/option.atkRapid
		var optionName = Object.getOwnPropertyNames(option)
		var disorderName = Object.getOwnPropertyNames(disorder)
		if(optionName.indexOf('regenHp') != -1){
			changeCheck = 1;
			var regenHpValue = performer.health.mHp * option.regenHp / 100 * rapid / 100
			performer.health.hp += regenHpValue;
			if(performer.health.hp > performer.health.mHp){
				performer.health.hp = performer.health.mHp * 1
			}
		}
		if(optionName.indexOf('regenSp') != -1){
			changeCheck = 1;
			var regenSpValue = performer.health.mSp *  option.regenSp / 100 * rapid / 100
			performer.health.sp += regenSpValue;
			if(performer.health.sp > performer.health.mSp){
				performer.health.sp = performer.health.mSp * 1
			}
		}
		if(optionName.indexOf('regenMp') != -1){
			changeCheck = 1;
			var regenMpValue = performer.health.mMp * option.regenMp / 100 * rapid / 100
			performer.health.mp += regenMpValue;
			if(performer.health.mp > performer.health.mMp){
				performer.health.mp = performer.health.mMp * 1
			}
		}
		if(disorderName.indexOf('poision') != -1){	
			var poisionResist = 0
			if(optionName.indexOf('poisionResist') != -1){
				poisionResist = option.poisionResist
			}
			var poisionValue = (disorder.poision.value - poisionResist) * rapid / 100
			if(poisionValue > 0){
				changeCheck = 1;		
				performer.health.hp -= poisionValue
				
			}
		}
		if(changeCheck === 1){
		changeStatusView(performer)
		}
		
	}
	summaryInBattle(performerNumber){
		var performer = dataActiveCharacter[performerNumber]
		new Option(performer,'inBattle')
	}
}
class Drop{
	constructor(performer,dropper){
				if(dropper.ally != 'player'){
				this.checkItemDrop(dropper);
				this.checkFundsDrop(dropper);

					if(performer.ally === 'player'){
						if(performer.type === 'summon'){
							var inNumber = performer.summoner
						}
						else{
							var inNumber = performer.code
						}
						this.checkExpDrop(dropper,inNumber);
					}
			}
	}
	checkItemDrop(dropper){
		var dropTable = dropper.dropTable
		var length = dropTable;
		var checkTable = dropTable.slice(0)
		var length = dropTable.length
		for(; length > 0 ;){
			var randomDice = Math.floor(Math.random() * length)
			var check = checkTable.splice(randomDice,1)[0]
			var checkDice = Math.random() * 1000000;
			if(checkDice < check[0]){
				var item = new Item(check[1])
				var category = item.category
				var code = item.code
				/*if(!inventoryData[category][code]){
					inventoryData[category][code] = item
				}
				else{
					inventoryData[category][code].number += 1;
				}*/
				new AddLog([{text : dropper.name},{text : 'drop Item'},{text : item.name}], 'Battle')
				dropper.dropTable = []
				break;
			}
			length--
		}
	}
	checkExpDrop(dropper,number){
		var performer = playerTeam.character[number]
		var exp = dropper.exp
		var name = Object.getOwnPropertyNames(exp)
		for(var i = 0, length = name.length; i < length; i++){
			performer.stateExp[name[i]] -= Math.floor(exp[name[i]])
			exp[name[i]] /= 2		
		}		
		Player.prototype.checkLevelUp(number)
	}
	checkFundsDrop(dropper){
		var funds= dropper.funds
		playerTeam.funds += Math.floor(funds);
		funds /= 2;
		
	}
}
class BattleEnd{
	constructor(){
		this.eLength = 0;
		this.pLength = 0;
		this.data = Object.getOwnPropertyNames(dataActiveCharacter)
		this.endCheck = 0;
		this.checkAllyLength()
		this.checkDeathCount()
		this.checkWinAlly()
		if(this.endCheck === 1){
			this.endBattle()
		}
	}	
	checkAllyLength(){
		var data = this.data
		var length = data.length;
		for(var i = 0; i < length; i++){
			if(data[i].indexOf('E') != -1){
				this.eLength += 1
			}
			else 	if(data[i].indexOf('P') != -1){
				this.pLength += 1
			}
		}
	}
	checkDeathCount(){
		var data = this.data
		var length = data.length
		for(var i = 0 ; i < length ; i++){
			if(data[i].indexOf('E') != -1){
				if(dataActiveCharacter[data[i]].health.hp <= 0){
				this.eLength -= 1
				}
			}
			else 	if(data[i].indexOf('P') != -1){
				if(dataActiveCharacter[data[i]].health.hp <= 0){
				this.pLength -= 1
				}
			}
		}
	}
	checkWinAlly(){
		if(this.pLength === 0){
			new AddLog( [{text : playerTeam.name},{text : 'Lose'}],'Battle')
			this.endCheck = 1
			
		}
		else if(this.eLength === 0){
			new AddLog( [{text : playerTeam.name},{text : 'Win'}] ,'Battle')
			this.endCheck = 1
		}
	}
	endBattle(){
		dataActiveCharacter = {}
		document.getElementById('Map').style.visibility = 'visible';
		document.getElementById('MiniMap').style.visibility = 'visible';
		document.getElementById('playerBorder').innerHTML = ''
		document.getElementById('enemyBorder').innerHTML = ''			
		CreateMap.prototype.changeOnPress(1)
		battleCheck = -1;
	}
}
class Battle{
	constructor(number){
		if(number === -1 || (!number && number != 0)){
			return
		}
		else {
			var performer= new Performer(number)
			this.checkDisorderPerforemr(performer)
			if(battleCheck== -1){
				return
			}
		}
		if(!performer.aria.skill){
			if(performer.type != 'player'){
				var action = this.checkParttern(performer,performer.parttern)
			  new activeAction(action,performer,-1,'first')
				}
			else if(performer.type === 'player'){
		  this.createSelectSkillButton(performer)
			}
		}
		else if(performer.aria.skill){
			var action = performer.aria.skill
			new activeAction(action,performer)
			}
	}

	checkParttern(performer,parttern){
		function judgeParttern(parttern,performer){
			var judgeCause = parttern[0]
			var value = (!parttern[1]) ? 0 : parttern[1] ;
			var action = parttern[2]
			switch(judgeCause){
				case 'OT00000' :
					return action
				case 'OTRAND0' :
					if(Math.random()*100 <= value ){
						return action
					}
					break;
				case 'OTCOUNT' :
					if(!parttern[3]){
						parttern.push(0)
					}
					if(parttern[3] < value || parttern[3] === 0 ){
						parttern[3] += 1
						return action
					}
					break;
				case 'MH00000' :
					if(performer.health.mHp === value){
						return action
					}
					break;
				case 'MH00100' :
					if(performer.health.mHp >= value){
						return action
					}
					break;
				case 'MH00200' :
					if(performer.health.mHp <= value){
						return action
					}
					break;
				case 'NH00000' :
					if(performer.health.hp === value){
						return action
					}
					break;
				case 'NH00100' :
					if(performer.health.hp >= value){
						return action
					}
					break;
				case 'NH00200' :
					if(performer.health.hp <= value){
						return action
					}
					break;
				case 'MM00000' :
					if(performer.health.mMp === value){
						return action
					}
					break;
				case 'MM00100' :
					if(performer.health.mMp >= value){
						return action
					}
					break;
				case 'MM00200' :
					if(performer.health.mMp <= value){
						return action
					}
					break;
				case 'NM00000' :
					if(performer.health.mp === value){
						return action
					}
					break;
				case 'NM00100' :
					if(performer.health.mp >= value){
						return action
					}
					break;
				case 'NM00200' :
					if(performer.health.mp <= value){
						return action
					}
					break;
				case 'MS00000' :
					if(performer.health.mSp === value){
						return action
					}
					break;
				case 'MS00100' :
					if(performer.health.mSp >= value){
						return action
					}
					break;
				case 'MS00200' :
					if(performer.health.mSp <= value){
						return action
					}
					break;
				case 'NS00000' :
					if(performer.health.sp === value){
						return action
					}
					break;
				case 'NS00100' :
					if(performer.health.sp >= value){
						return action
					}
					break;
				case 'NS00200' :
					if(performer.health.sp <= value){
						return action
					}
					break;
				case 'DE10000' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally === dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge === value){
						return action
					}
					break;
				case 'DE10100' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally === dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge >= value){
						return action
					}
					break;
				case 'DE10200' :
					var length = dataActiveCharacter.length;
					var judge = 0
					for(var i = 0 ; i < length; i++){
						if(performer.ally === dataActiveCharacter[i].ally && dataActiveCharacter[i].health.hp <= 0){
							judge += 1;
						}
					}
					if(judge <= value){
						return action
					}
					break;
						 }
			return  0
		}
		var partternLength = parttern.length
		var action = 0;
		for(var i = 0 ; i < partternLength; i++){
			if(i > 0 && (action === 'ADDJUDGE' && parttern[i-1][2] === action)){
			action = judgeParttern(parttern[i],performer)
			}
			else if(i > 0 && (action != 'ADDJUDGE' && parttern[i-1][2] === 'ADDJUDGE')){
				// 이전 조건이 다중구문 이면서 불만족했으나 현재 조건에 대해서는 패스
				// action != 'ADDJUDGE' && parttern[i-1][2] == 'ADDJUDGE'
				// 이전 조건이 다중구문 이면서 만족했고 현재 조건이 다중 구문일때 진행
				// action == 'ADDJUDGE' && parttern[i-1][2] == action
				// 이전 조건이 다중구문 이면서 만족했고 현재 조건이 액션일때
				// 이전 조건과 상관없을 경우
				// 
			}
			else{
				action = judgeParttern(parttern[i],performer)
			}
			if(action != 0 && action != 'ADDJUDGE'){
				break;
			}
		}
		return action
	}
	checkDisorderPerforemr(performer){
		var disorder = performer.disorder
		var disorderName = Object.getOwnPropertyNames(disorder)
		var disorderLength = disorderName.length
		for(var i = 0 ; i < disorderLength ; i++){
			if(disorder[disorderName[i]].turn > 0){
				disorder[disorderName[i]].turn -= 1;
				if(disorder[disorderName[i]].turn === 0){
					delete disorder[disorderName[i]]
				}
			}
		}
	}
	createSelectSkillButton(performer){
		var performerNumber = performer.code
		var performerState = document.getElementById(performer.code + 'Border')
		performerState.style.backgroundColor = 'rgb(60, 146, 173)'
		var skill = playerGroup[performer.code].skill.active;
		var skillBorder = document.getElementById('SkillBorder')
		skillBorder.value = performer.code
			//skillBorder.className = 'SkillBorder'
		var skillLength = skill.length;
		skillBorder.innerHTML = ''
		var performerName = document.createElement('div')
		performerName.innerText = 'Action Select By   ' + performer.name
		performerName.className = 'Name'
		skillBorder.appendChild(performerName)
			for(var i = 0 ; i < skillLength; i++){
				var skillData = dataSkill[skill[i]]
				var skillSlot = document.createElement('div');
				skillSlot.className = 'SkillSlot'
				var skillButton = document.createElement('div');
				skillButton.className = 'SkillButton'
				var innerText = skillData.name + ' ('
				var cost = Object.getOwnPropertyNames(skillData.cost)
				var costLength = cost.length;
				if(costLength != 0){
					for(var j = 0 ; j < costLength ; j++){
						innerText += ' ' + cost[j] + ' : ' + skillData.cost[cost[j]] + ' '
					}
					innerText += ' )'
				}
				else{
					innerText += ' None )'
				}
				skillButton.innerText = innerText
				skillButton.value = skillData.code
				skillButton.addEventListener('click',
																		 function(){
					var performer = this.parentNode.parentNode.value										
					document.getElementById(performer + 'Border').style.backgroundColor = 'rgb(66, 104, 66)'
					this.parentNode.parentNode.style.visibility = 'collapse';
					this.parentNode.parentNode.innerHTML = ''
					dataActiveCharacter[performerNumber].active = 0;		
					new activeAction(this.value,0,performerNumber,'first')
					new BattleData

				}
																		)
				skillButton.addEventListener('mouseover',
																		 function(){
					var check = new ActionCost(dataActiveCharacter[performerNumber],dataSkill[this.value],'View').fail
					if(check === 1){
						this.style.backgroundColor = 'red'
					}
					else{
						this.style.backgroundColor = 'black'
					}
				}																		 
																		 )
				skillSlot.appendChild(skillButton)
				skillBorder.appendChild(skillSlot)
			}
			skillBorder.style.visibility  =  'visible';
		performer.active = 1;
}
}
function changeGaugeView(performer){
	var performerCode = performer.code
	var gauge = document.getElementById(performerCode + 'Gauge')
	var stock = gaugeStock[performerCode]
	var width = Math.abs(stock)

	if(stock > 0){
		gauge.style.backgroundColor = 'limegreen';
		if(width > 100){
			width = 100
		}
	}
	else{
		if(width > 100){
			width %= 100
		}
		var gaugeColor = 'rgba( '
		var backColor = 'rgba( '
		var max = gauge.parentElement
		switch(Math.floor(Math.abs(stock) / 100)){
			case 0 :
				gaugeColor += '100, 100, 100, 0.85)'
				backColor += '0, 0, 0, 0.25)'
				break;
			case 1 :
				gaugeColor += '90, 90, 90,0.85)'
				backColor += '100, 100, 100, 0.85)'
				break;
			case 2 :
				gaugeColor += '80, 80, 80,0.85)'
				backColor += '90, 90, 90,0.85)'
				break;
			case 3 :
				gaugeColor += '70, 70, 70,0.85)'
				backColor += '80, 80, 80,0.85)'
				break;
			case 4 :
				gaugeColor += '60, 60, 60,0.85)'
				backColor += '70, 70, 70,0.85)'
				break;
			default :
				gaugeColor += '50, 50, 50,0.85)'
				backColor += '60, 60, 60,0.85)'
				break;
											}
		gauge.style.backgroundColor = gaugeColor;
		max.style.backgroundColor = backColor
	}
	gauge.innerText = Math.floor(stock)
	gauge.style.width = width + '%'
}
class SkillValue{
	constructor(performer,target,skill,disorder){
		var value = this.baseValue(skill,performer,target);
		var optionP = performer.option.battle
		var stateP = performer.state
		var optionT = target.option.battle
		var stateT = target.state
		var skillType = skill.skillType
		var defenceType = skill.defenceType
		var resistType = skill.power[0][0]
		value = this.checkCritical(optionP.rateCrtLuk,optionP.rateCrt,optionP.rateVal,value)
		if(skillType === 'Combat'){
			var perfectDefence = this.checkPerfectDefence(optionT.ratePFD,optionP.rateHitJust)
			if(perfectDefence === 1){
				if(!skill.hitType || skill.hitType != 'Just'){
					value[0] = 0;
				}
				else if(skill.hitType === 'Just'){
				}
			}
			value = this.calculrateDefence(defenceType,value,optionT)
			value = this.calculrateResist(resistType,value,optionT)
		}
		else if(skillType === 'Support'){
			if(!defenceType){
				value = value[0] + value [1]
			}
			else{	
				value = this.calculrateDefence(defenceType,value,optionT)
				value = this.calculrateResist(resistType,value,optionT)
			}
		}
		this.value = Math.ceil(value)
		this.addEffect = skill.addEffect
	}
	baseValue(skill,performer,target){
		var value = skill.power
		var valueLength = value.length;
		var option = performer.option.battle
		var baseValueType = value[0][0]
		var baseValue = value[0][1]
		var damage = 0;
		var trueDamage = 0;
		switch(baseValueType){
			case 'Physical' :
				damage += option.atkPhy * baseValue / 100
				trueDamage += option.atkPhyTrue * baseValue / 100
				break;
			case 'Magical' :
				damage += option.atkMag * baseValue / 100
				trueDamage += option.atkMagTrue * baseValue / 100
				break;
			case 'Hybrid' :
				damage += (option.atkPhy + option.atkMag) * baseValue / 200
				trueDamage += (option.atkPhyTrue + option.atkMagTrue) * baseValue / 200
				break;
												}
		if(valueLength > 1){
			for(var i = 1 ; i < valueLength; i++){
				var addValue = value[i][1]
				var addressType = value[i][0][0];
				var indexP = addressType.indexOf('P')
				var indexT = addressType.indexOf('T')
				if(indexP != -1){
					var address = addressType.slice(0,indexP)
					var main = performer[address][value[i][0][1]]
					}
				else if( indexT != -1){
						var address = addressType.slice(0,indexT)
						var main = target[address][value[i][0][1]]
						}
				switch(value[i][2]){
					case 0 :
						damage += main * addValue / 100
						break;
					case 1 :
						damage *= main * addValue / 100
						break;
													}
			}
		}
		return [damage , trueDamage]
	}
	checkCritical(rateCrtLuk,rateCrt,rateVal,damage){
		var multiply = 1;
		var diceLuk = Math.random() * 100;
		var diceCrt = Math.random() * 100;
		if(diceLuk <= rateCrtLuk){
			multiply = 2;
			new AddLog( [{text : 'Luk multiply' + multiply}],'Turn')
		}
		else if(diceCrt <= rateCrt){
			multiply = rateVal 
			new AddLog( [{text : 'multiply' + multiply}],'Turn')
		}
		damage[0] *= multiply
		damage[1] *= multiply
		return damage
	}
	checkPerfectDefence(ratePFD,rateHitJust){
		var dicePFD = Math.random() * 100;
		var checkPFD = ratePFD - rateHitJust
		if(dicePFD <= checkPFD){
			return 1;
		}
		else{
			return 0;
		}
	}
	calculrateDefence(type,damage,option){
		var value = damage[0];
		var trueValue = damage[1];
		var minValue = damage[0] / 10;
		if(value != 0){
			switch(type){
				case 'Physical' : //'defPhyPer','defPhyNum','resPhyPer','resPhyNum'
					value = value * ( 100 - option.defPhyPer) / 100 - option.defPhyNum;
					break;
				case 'Magical' :
					value = value * ( 100 - option.defMagPer) / 100 - option.defMagNum;
					break;
				case 'Hybrid' : 
					value = value * ( 100 - (option.defPhyPer + option.defMagPer) / 2) / 100 - (option.defPhyNum + option.defMagNum) / 2;
					break;
				case 'Ignore' : 
					break;
								 }
			if(value < minValue){
				value = minValue
			}
		}
		value +=trueValue
		return value;
	}
	calculrateResist(type,damage,option){
		var value = damage;
		var minValue = damage / 100 ; 
		switch(type){
			case 'Physical' : //'defPhyPer','defPhyNum','resPhyPer','resPhyNum'
				value = value * ( 100 - option.resPhyPer) / 100 - option.resPhyNum;
				break;
			case 'Magical' :
				value = value * ( 100 - option.resMagPer) / 100 - option.resMagNum;
				break;
			case 'Hybrid' : 
				value = value * ( 100 - (option.resPhyPer + option.resMagPer) / 2) / 100 - (option.resPhyNum + option.resMagNum) / 2;
				break;
							 }
		if(value < minValue){
			value = minValue
		}
		return value
	}
	calculrateElement(){}
}
function createMapData(){
	do{
	mapData = new CreateMap();
		var check = new CanClearTest().clear;
	}while(check === 0);
	new Sight;
	document.getElementById('Map').style.visibility = 'visible';
	document.getElementById('MiniMap').style.visibility = 'visible';
	//document.getElementById('AreaSelect').disabled = true;
	//document.getElementById('AreaLevel').disabled = true;
}
var inCheck = 0;
function useItem(){
	var code = this.value;
	var item = dataItem[code]
	var category = item.category
	var itemType = item.type
	if(itemType === 'Map' || itemType=='Key'){
		var create = new Area
		create.addArea(item.areaCode)
	}
}

class Area{
	constructor(){
		this.areaCode = document.getElementById("AreaSelect").value
	}
	addLevel() {
    areaData[this.areaCode] += 1;
    this.changeLevel();
	}
	addArea(areaType) {
    areaType = parseInt(areaType);
    var areaSort = (Math.floor(areaType / 1000)) * 1000;
    if (areaSort.length === 1) {
        areaSort = '0000';
    }
    var area = document.getElementById('AreaSelect');
    var length = area.length
    var newAreaData = dataArea[areaType]
    for (var j = 0; j < length; j++) {
        if (area[j].value === areaType) {
            console.log('openArea')
            return;
        }
    }
    var areaName = newAreaData.name;
    var newArea = document.createElement('option');
    newArea.value = areaType;
    newArea.innerText = areaName;
    //newArea.className = newAreaData.type;
    var i = 0;
    for (; i < length; i++) {
        if (areaSort <= area[i].value) {
            if (areaSort < area[i].value) {
                var newAreaCase = document.createElement('option');
                newAreaCase.value = areaSort;
                newAreaCase.innerText = dataArea[areaSort].name;
                //newAreaCase.className = newAreaData.type;
                area.insertBefore(newAreaCase, area[i])
                i++;
            }
            break;
        }
    }
    area.insertBefore(newArea, area[i]);
}
	changeLevel() {
    if (!areaData[this.areaCode]) {
        areaData[this.areaCode] = 0;
    }
    var levelOption = document.getElementById('AreaLevel')
    levelOption.innerHTML = ''
    if (this.areaCode % 1000 != 0) {
        var level = areaData[this.areaCode]
        for (var i = 0; i <= level; i++) {
            var newLevel = document.createElement('option');
            newLevel.innerText = 'Lv' + i
            newLevel.value = i
            levelOption.appendChild(newLevel)
        }
        levelOption.selectedIndex = levelOption.length - 1
			levelOption.disabled = ''
    } else {
        var newLevel = document.createElement('option');
        newLevel.innerText = 'Not Area'
        levelOption.appendChild(newLevel)
			levelOption.disabled = 'true'
    }
}
}
class CreateMap extends Area{
	// 0 = road , 1 = wall , 5 = enemy , 7 = exit ,10 = start , 15 = fog
	constructor(){
		super()
		//this.map.party.sigth = party.sigth;
		var random = Math.floor(Math.random()*17)+5
		this.start = {
				x: 0,    y: 0
			}
		this.exit = {
				x: 0,    y: 0
			}
		this.party = {
		x: 0,    y: 0,
				sigth : 12
			}
		this.count = 0;
		this.solve = []
		this.map = []
		this.createMap();
		var y = this.map.length
		var x = this.map[0].length
		this.lengthX = x;
		this.lengthY = y;
		this.changeMap(random);
		//this.createPositionEnemy();

		this.createFinishMap(x,y);
		this.creatFog();
		this.turn = 0;
		this.changeOnPress(1)
		document.getElementById('Area').style.visibility = 'hidden';
	}
	calculrateLength(level){
		var length = Math.round(Math.random() * Math.pow(2, 1 + level / 20) * 10 + 12 * (1 + level / 10) )+2
		return length
	}
	checkArea(){
		var area = document.getElementById("AreaSelect").value
        if (area % 1000 === 0) {
            return 0;
        } else {
            return 1;
        }
	}
	createRoom(x, y, type, lengthX, lengthY) {
		var map = this.map
        if (!lengthX) {
            lengthX = Math.floor(Math.random() * map[0].length / (16-Math.random()*8)) + 1
        }
        if (!lengthY) {
            lengthY = Math.floor(Math.random() * map.length / (16-Math.random()*8)) + 1
        }
        switch (type) {
        default:
        case 0:
            var xMax = Math.floor(x + lengthX / 2) + 1
            var yMax = Math.floor(y + lengthY / 2) + 1
            var xMin = Math.floor(x - lengthX / 2) - 1
            var yMin = Math.floor(y - lengthY / 2) - 1
            for (var j = yMin; j < yMax; j++) {
                if (map[j]) {
                    for (var i = xMin; i < xMax; i++) {
                        if (map[j][i] && (map[j][i] != 5 && map[j][i] != 7 && map[j][i] != 10)) {
                            map[j][i] = 0;
                        }
                    }
                }
            }
            break;
        case 1:
            var a = Math.floor(lengthX / 2) + 1
            var b = Math.floor(lengthY / 2) + 1
            for (var j = -b; j < b; j++) {
                if (map[y + j]) {
                    for (var i = -a; i < a; i++) {
                        if (Math.pow(j, 2) / Math.pow(b, 2) + Math.pow(i, 2) / Math.pow(a, 2) <= 1) {
                            if (map[y + j][x + i] && (map[y + j][x + i] != 5 && map[y + j][x + i] != 7 && map[y + j][x + i] != 10)) {
                                map[y + j][x + i] = 0;
                            }
                        }
                    }
                }
            }
            break;
        }
		 return { x : x , y : y , lengthX : lengthX , lengthY : lengthY, type : type}
    }
	createRoomPash(start, end){
		
		var startDirection = Math.floor(Math.random()*4) // top left bottom rigth
		var endDirection = Math.floor(Math.random()*4) // top left bottom rigth
	if(start.type === 0){

		switch(startDirection){
			case 0 :
			var startX = Math.floor(Math.random()*start.lengthX-start.lengthX/2)+start.x
			var startY = Math.floor(start.y - start.lengthY/2)
			break;
			case 1 :
			var startX = Math.floor(start.x + start.lengthX/2)
			var startY = Math.floor(Math.random()*start.lengthY-start.lengthY/2)+start.y
			break;
			case 2 :
			var startX = Math.floor(Math.random()*start.lengthX-start.lengthX/2)+start.x
			var startY = Math.floor(start.y + start.lengthY/2)
			break;
			case 3 :
			var startX = Math.floor(start.x - start.lengthX/2)
			var startY = Math.floor(Math.random()*start.lengthY-start.lengthY/2)+start.y
			break;
		}
	}
	else if( start.type === 1){
		switch(startDirection){
			case 0 :
			var startX = start.x 
			var startY = Math.floor(start.y - start.lengthY/2)
			break;
			case 1 :
			var startX = Math.floor(start.x + start.lengthX/2)
			var startY = start.y 
			break;
			case 2 :
			var startX = start.x 
			var startY = Math.floor(start.y + start.lengthY/2)
			break;
			case 3 :
			var startX = Math.floor(start.x - start.lengthX/2)
			var startY = start.y
			break;
		}
	}
	if(end.type === 0){
		switch(endDirection){
			case 0 :
			var endX = Math.floor(Math.random()*end.lengthX-end.lengthX/2)+end.x
			var endY = Math.floor(end.y - end.lengthY/2)
			break;
			case 1 :
			var endX = Math.floor(end.x + end.lengthX/2)
			var endY = Math.floor(Math.random()*end.lengthY-end.lengthY/2)+end.y
			break;
			case 2 :
			var endX = Math.floor(Math.random()*end.lengthX-end.lengthX/2)+end.x
			var endY = Math.floor(end.y + end.lengthY/2)
			break;
			case 3 :
			var endX = Math.floor(end.x - end.lengthX/2)
			var endY = Math.floor(Math.random()*end.lengthY-end.lengthY/2)+end.y
			break;
		}
	}
	else if( end.type === 1){
		switch(endDirection){
			case 0 :
			var endX = end.x 
			var endY = Math.floor(end.y - end.lengthY/2)
			break;
			case 1 :
			var endX = Math.floor(end.x + end.lengthX/2)
			var endY = end.y 
			break;
			case 2 :
			var endX = end.x 
			var endY = Math.floor(end.y + end.lengthY/2)
			break;
			case 3 :
			var endX = Math.floor(end.x - end.lengthX/2)
			var endY = end.y
			break;
		}
	}
	var passWidth = 1
	var map = this.map
	if(startX > endX ){
		for( var i = endX ; i<=startX ;i++){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[startY - j] &&  map[startY - j][i] != 10 &&  map[startY - j][i] != 7 && random){
					 map[startY - j][i] = 0
				}
			}
			
		}

	}
	else{
		for( var i = startX ; i<=endX ;i++){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[startY - j] &&  map[startY - j][i] != 10 &&  map[startY - j][i] != 7 && random){
					 map[startY - j][i] = 0
				}
			}
			
		}
	}
	if(startY > endY){
		for( var i = endY; i< startY; i++){
			if( map[i]){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[i][startX - j] != 10 &&  map[i][startX - j] != 7 && random){
					 map[i][startX-j] = 0
				}
		}
			}
	}
	}
	else{
		for( var i = startY; i< endY; i++){
			if( map[i]){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[i][endX - j] != 10 &&  map[i][endX - j] != 7 && random){
					 map[i][endX-j] = 0
				}
		}
	}
		}

}
	}
	createMap() {
    function calculrateCount(length) {
        var count = Math.floor(Math.ceil(length / 5) / 2) * 2 + 1;
        var center = Math.floor(length / 2)
        var minus = center - (Math.ceil(count / 2) - 1) * 5;
        var counter = [];
        for (var i = 0; i < count; i++) {
            if (i % 2 === 1) {
                counter[i] = Math.floor(count / 2 - Math.ceil(i / 2)) * 5 + minus;
            } else if (i % 2 === 0) {
                counter[i] = Math.floor(count / 2 + Math.ceil(i / 2)) * 5 + minus;
            }
        }
        return counter;
    }
		function createRoomPash(start, end){
		
		var startDirection = Math.floor(Math.random()*4) // top left bottom rigth
		var endDirection = Math.floor(Math.random()*4) // top left bottom rigth
	if(start.type === 0){

		switch(startDirection){
			case 0 :
			var startX = Math.floor(Math.random()*start.lengthX-start.lengthX/2)+start.x
			var startY = Math.floor(start.y - start.lengthY/2)
			break;
			case 1 :
			var startX = Math.floor(start.x + start.lengthX/2)
			var startY = Math.floor(Math.random()*start.lengthY-start.lengthY/2)+start.y
			break;
			case 2 :
			var startX = Math.floor(Math.random()*start.lengthX-start.lengthX/2)+start.x
			var startY = Math.floor(start.y + start.lengthY/2)
			break;
			case 3 :
			var startX = Math.floor(start.x - start.lengthX/2)
			var startY = Math.floor(Math.random()*start.lengthY-start.lengthY/2)+start.y
			break;
		}
	}
	else if( start.type === 1){
		switch(startDirection){
			case 0 :
			var startX = start.x 
			var startY = Math.floor(start.y - start.lengthY/2)
			break;
			case 1 :
			var startX = Math.floor(start.x + start.lengthX/2)
			var startY = start.y 
			break;
			case 2 :
			var startX = start.x 
			var startY = Math.floor(start.y + start.lengthY/2)
			break;
			case 3 :
			var startX = Math.floor(start.x - start.lengthX/2)
			var startY = start.y
			break;
		}
	}
	if(end.type === 0){
		switch(endDirection){
			case 0 :
			var endX = Math.floor(Math.random()*end.lengthX-end.lengthX/2)+end.x
			var endY = Math.floor(end.y - end.lengthY/2)
			break;
			case 1 :
			var endX = Math.floor(end.x + end.lengthX/2)
			var endY = Math.floor(Math.random()*end.lengthY-end.lengthY/2)+end.y
			break;
			case 2 :
			var endX = Math.floor(Math.random()*end.lengthX-end.lengthX/2)+end.x
			var endY = Math.floor(end.y + end.lengthY/2)
			break;
			case 3 :
			var endX = Math.floor(end.x - end.lengthX/2)
			var endY = Math.floor(Math.random()*end.lengthY-end.lengthY/2)+end.y
			break;
		}
	}
	else if( end.type === 1){
		switch(endDirection){
			case 0 :
			var endX = end.x 
			var endY = Math.floor(end.y - end.lengthY/2)
			break;
			case 1 :
			var endX = Math.floor(end.x + end.lengthX/2)
			var endY = end.y 
			break;
			case 2 :
			var endX = end.x 
			var endY = Math.floor(end.y + end.lengthY/2)
			break;
			case 3 :
			var endX = Math.floor(end.x - end.lengthX/2)
			var endY = end.y
			break;
		}
	}
	var passWidth = 1
	if(startX > endX ){
		for( var i = endX ; i<=startX ;i++){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[startY - j] &&  map[startY - j][i] != 10 &&  map[startY - j][i] != 7 && random){
					 map[startY - j][i] = 0
				}
			}
			
		}

	}
	else{
		for( var i = startX ; i<=endX ;i++){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[startY - j] &&  map[startY - j][i] != 10 &&  map[startY - j][i] != 7 && random){
					 map[startY - j][i] = 0
				}
			}
			
		}
	}
	if(startY > endY){
		for( var i = endY; i< startY; i++){
			if( map[i]){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[i][startX - j] != 10 &&  map[i][startX - j] != 7 && random){
					 map[i][startX-j] = 0
				}
		}
			}
	}
	}
	else{
		for( var i = startY; i< endY; i++){
			if( map[i]){
			for( var j = -passWidth; j<passWidth ; j ++){
				var random = Math.round(Math.random()*0.8+0.2)
				if( map[i][endX - j] != 10 &&  map[i][endX - j] != 7 && random){
					 map[i][endX-j] = 0
				}
		}
	}
		}

}
	}
    var check = this.checkArea();
    if (check === 0) {
        return;
    }
    inCheck = 1;
    //enemyStack = [];
		var map = this.map
    var level = parseInt(document.getElementById('AreaLevel').value);
    var x = this.calculrateLength(level)
    var y = this.calculrateLength(level)
		if(x > 400){
			x = 600
		}
		if(y > 400){
			y = 600
		}
    for (var i = 0; i < y; i++) {
        map[i] = []
        for (var j = 0; j < x; j++) {
            map[i][j] = Math.round(Math.random() * 0.90);
        }
    }
//42 8
	var startX = Math.floor(Math.random() * (x-2)+1)
    var startY = Math.floor(Math.random() * (y-2)+1)
    var exitX = Math.floor(Math.random() * (x-2)+1)
    var exitY = Math.floor(Math.random() * (y-2)+1)
    while ((startX + Math.floor(x / 10) + 1 > exitX && startX - (Math.floor(x / 10) + 1) < exitX) || (startY + Math.floor(y / 10) + 1 > exitY && startY - (Math.floor(y / 10) + 1) < exitY)) {
        exitX = Math.floor(Math.random() * (x - 2) + 1)
        exitY = Math.floor(Math.random() * (y - 2) + 1)
    }
	 var roomStack = []
    var type = Math.round(Math.random());
    map[exitY][exitX] = 7;
    map[startY][startX] = 10;
    var startData = this.createRoom(startX, startY, type, Math.floor(Math.random()*3+3), Math.floor(Math.random()*3+3))
		type = Math.round(Math.random());
    var exitData = this.createRoom(exitX, exitY, type, Math.floor(Math.random()*3+3), Math.floor(Math.random()*3+3))
	 roomStack.push(startData)
	 roomStack.push(exitData)
    if (level > 2) {
		
        var roomCount = Math.floor(Math.random() * (level) / 5 + level / 10) + 1
        for (var i = 0; i < roomCount; i++) {
            type = Math.round(Math.random());
			  do{
				  var roomlength = roomStack.length 
				  var sameCount = 0;
            var roomX = Math.floor(Math.random() * (x));
            var roomY = Math.floor(Math.random() * (y));
				  for(var j = 0; j < roomlength ; j++){// testing
					  if(roomStack[j].x === roomX && roomStack[j].y === roomY){
						  sameCount+=1;
					  }
				  }
			  }while(sameCount != 0)
            var roomData = this.createRoom(roomX, roomY, type)
				roomStack.push(roomData);
			  	var roomStackLength = roomStack.length
        }
    }

	if(roomStackLength > 1){
		var countPash = 0;
		for(var i = 0 ; i < roomStackLength; i++){
			var countRoomPash = 0;
			for(var j = i + 1 ; j < roomStackLength; j++){
				var checkPash = Math.random()*(0.45+countRoomPash *0.01)+countPash/100 ;
				if(checkPash < 1){
				createRoomPash(roomStack[i],roomStack[j]);
					countPash += 1
					countRoomPash +=1
				}
				if(i === 0 && j === 1){
					if(roomStack[0].x > roomStack[1].x){
						
					}
					else if(roomStack[0].x < roomStack[1].x){
						
					}
					if(roomStack[0].y > roomStack[1].y){
						
					}
					else if(roomStack[0].y < roomStack[1].y){
						
					}
				}
			}
		}
	}	
    this.start.x = startX;
    this.start.y = startY;
    this.party.x = startX;
    this.party.y = startY;
    this.exit.x = exitX;
    this.exit.y = exitY;
		return map
}
	checkClear(){

	}
	creatFog() {
    var x = this.lengthX;
    var y = this.lengthY;
    for (var i = 0; i < y; i++) {
        this.solve[i] = []
        for (var j = 0; j < x; j++) {
            if ((this.start.x != j || this.start.y != i) && (this.exit.x != j || this.exit.y != i)) {
                this.solve[i][j] = 15
            } else {
                if ( this.start.x === j &&  this.start.y === i) {
                    this.solve[i][j] = 10;
                }
            }
        }
    }
}
	changeMap(repeatCount) {
    function calculrateCount(length) {
        var count = Math.ceil(length / 3);
        var returnValue = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < count; j++) {
                returnValue[j + i * count] = j * 3 + i;
            }
        }
        return returnValue
    }
    if (!repeatCount) {
        repeatCount = 1;
    }
    var update = [];
    var x = this.lengthX;
    var y = this.lengthY;
    for (var i = 0; i < y; i++) {
        update[i] = [];
        for (var j = 0; j < x; j++) {
            update[i][j] = this.map[i][j]
        }
    }
    var countX = calculrateCount(x)
    var countXLength = countX.length;
    var countY = calculrateCount(y)
    var countYLength = countY.length;
    for (var h = 0; h < repeatCount; h++) {
        for (var i = 0; i < countYLength; i++) {
			  if(this.map[countY[i]] ){
            for (var j = 0; j < countXLength; j++) {
					if((this.map[countY[i]][countX[j]]+1)%3){
                if ((countY[i] != this.start.y || countX[j] != this.start.x) && (countY[i] != this.exit.y || countX[j] != this.exit.x)) {
                    var wallCheck = 7 - Math.floor(Math.random() * 3);
                    var wallCount = 0;
                    if (this.map[countY[i] - 1]) {
                        if (!((this.map[countY[i] - 1][countX[j] - 1]+1)%2) || this.map[countY[i] - 1][countX[j] - 1] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] - 1][countX[j]]+1)%2) || this.map[countY[i] - 1][countX[j]] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] - 1][countX[j] + 1]+1)%2) || this.map[countY[i] - 1][countX[j] + 1] === 1) {
                            wallCount += 1;
                        }
                    }
                    if (this.map[countY[i]]) {
                        if (!((this.map[countY[i]][countX[j] - 1]+1)%2) || this.map[countY[i]][countX[j] - 1] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i]][countX[j]]+1)%2) || this.map[countY[i]][countX[j]] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i]][countX[j] + 1]+1)%2) || this.map[countY[i]][countX[j] + 1] === 1) {
                            wallCount += 1;
                        }
                    }
                    if (this.map[countY[i] + 1]) {
                        if (!((this.map[countY[i] + 1][countX[j] - 1]+1)%2) || this.map[countY[i] + 1][countX[j] - 1] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] + 1][countX[j]]+1)%2) || this.map[countY[i] + 1][countX[j]] === 1) {
                            wallCount += 1;
                        }
                        if (!((this.map[countY[i] + 1][countX[j] + 1]+1)%2) || this.map[countY[i] + 1][countX[j] + 1] === 1) {
                            wallCount += 1;
                        }
                    }
                    if (wallCount >= wallCheck) {
                        update[countY[i]][countX[j]] = 1;
                    } else if (wallCount <= wallCheck/(2+Math.random()*2)) {
                        update[countY[i]][countX[j]] = 0;
                    }
                }
				}
            }
			  }
        }
        this.map = update;
    }
}
	createFinishMap(x,y,lengthX,lengthY,type,diraction){
	if(!lengthX && !lengthY){
		for(var i = 0; i<y; i++){
			if(i === 0  || i === y-1){
				for(var j = 0 ; j < x; j++){
					this.map[i][j] = 1
				}
			}
			else{
				this.map[i][0] = 1;
				this.map[i][x-1] = 1;
			}
		}
	}
	else{
		switch (type) {
        default:
        case 0:
            var xMax = Math.floor(x + lengthX / 2) + 1
            var yMax = Math.floor(y + lengthY / 2) + 1
            var xMin = Math.floor(x - lengthX / 2) - 1
            var yMin = Math.floor(y - lengthY / 2) - 1
            for (var j = yMin; j < yMax; j++) {
                if (this.map[j]) {
                    for (var i = xMin; i < xMax; i++) {
                        if (this.map[j][i] && (this.map[j][i] != 5 && this.map[j][i] != 7 && this.map[j][i] != 10)) {
                            this.map[j][i] = 0;
                        }
                    }
                }
            }
            break;
        case 1:
            var a = Math.floor(lengthX / 2) + 1
            var b = Math.floor(lengthY / 2) + 1
            for (var j = -b; j < b; j++) {
                if (this.map[y + j]) {
                    for (var i = -a; i < a; i++) {
                        if (Math.pow(j, 2) / Math.pow(b, 2) + Math.pow(i, 2) / Math.pow(a, 2) <= 1) {
                            if (this.map[y + j][x + i] && (this.map[y + j][x + i] != 5 && this.map[y + j][x + i] != 7 && this.map[y + j][x + i] != 10)) {
                                this.map[y + j][x + i] = 0;
                            }
                        }
                    }
                }
            }
				break;
								}
	}
	}
	end(){
		if (this.party.x === this.exit.x && this.party.y === this.exit.y) {
			console.log('exitArea');
			var answer = confirm('End?');
			if (answer) {
				console.log('clear   ' + this.turn);
				this.turn = 0;
				inCheck = 0;
				this.changeOnPress(1);
				document.getElementById('AreaSelect').disabled = false;
				document.getElementById('AreaLevel').disabled = false;
				document.getElementById('Area').style.visibility = 'visible';
				if (document.getElementById('AreaLevel').value === areaData[document.getElementById('AreaSelect').value]) {
					super.addLevel();
				}
			}
		}
	}
	restart(){
		if (this.party.x === this.start.x && this.party.y === this.start.y && this.turn != 0) {
			console.log('startArea');
			this.turn = 0;
			var answer = confirm('reStart?');
			if (answer) {
				inCheck = 0;
				this.changeOnPress(1);
				console.log('reStart');
				document.getElementById('AreaSelect').disabled = false;
				document.getElementById('AreaLevel').disabled = false;
				document.getElementById('Area').style.visibility = 'visible';
        }
    }
		
	}
	changeOnPress(type) {
    if (type === 1) {
        if (inCheck === 0 || Object.getOwnPropertyNames(dataActiveCharacter).length != 0) {
            document.onkeypress = '';
        } else {
            document.onkeypress = moveMap
        }
			
    } else {
        document.onkeypress = '';
    }
	}
	checkTurn(keyCode) {
		function checkRandomIncount(count) {
			var addCount = Math.round(Math.floor(Math.random() * 32550648 + 1017207) / 8137662);
			count += addCount;
			if (count >= 126) {
				search()
				console.log('Enemy')
				count = 0;
			} else {
			}
			return count
	}
//	var positionEnemyLength = enemyStack.length;
 //   for (var i = 0; i < positionEnemyLength; i++) {
 //       movePositionEnemy(i)
  //  }
    this.count = checkRandomIncount(this.count);
    //checkBattle()
    this.turn += 1;
		if (this.party.x === this.exit.x && this.party.y === this.exit.y) {
			this.end()
		}
		if (this.party.x === this.start.x && this.party.y === this.start.y  && keyCode != 53) {
			this.restart()
		}
}
}
class CanClearTest{
	constructor(){
		var startX = mapData.start.x
		var startY = mapData.start.y
		var endX = mapData.exit.x
		var endY = mapData.exit.y
		var lengthX = this.lengthX = mapData.lengthX
		var lengthY = this.lengthY = mapData.lengthY
		var map = mapData.map
		var marker = this.marker = []
		this.map = map
		//this.check = this.selectCheck()
		this.x = startX
		this.y = startY
		for(var i = 0 ; i < lengthY ; i++){
			marker[i] = []
			for(var j = 0 ; j < lengthX; j++){
				marker[i][j] = 0
			}
		}	
		var x = this.x
		var y = this.y
		this.stack = this.movefill(x,y)		
		do{
			var stack = []
			var length = this.stack.length
			for(var i = 0; i < length ; i++){
				var pushStack = this.movefill(this.stack[i].x , this.stack[i].y)
				var pushLength = pushStack.length
				for(var j = 0 ; j < pushLength; j++){
					stack.push(pushStack[j])
				}
			}
			this.stack = stack
		}while(this.stack.length != 0);
		/*var count = 0
		var checkType = 0
		var clear = 0
		do{
		var a = this.move(checkType,x,y)
		 x = a[1]
		 y = a[2]
		 checkType = a[0]
			count += 1
			if(x === endX && y === endY){
				clear = 1
			}
		}while(count != 1000000 && (clear != 1));*/
		this.clear = 0
		if(marker[endY][endX] === 1){
			console.log('can')
			this.clear = 1
		}
		else{
			console.log('fail')
		}
	}
	/*selectCheck(){
		var checkX =  this.startX - this.endX
		var checkY = this.startY - this.endY
		var x = -1
		var y = -1
		if(checkX < 0){
			x = 0
		}
		else if(checkX === 0){
			x = 1
		}
		else{
			x = 2
		}
		if(checkY < 0){
			y = 0
		}
		else if(checkY === 0){
			y = 1
		}
		else{
			y = 2
		}
		var checkType = y * 3 + x
		var nowCheckType = {0 : {x : -1 , y : -1} , 1 : {x : 0,y : -1}, 2 : {x : 1,y : -1}, 3 : {x : -1,y : 0}, 4 : {x : 0,y : 0}, 5 : {x : 1,y : 0}, 6 : {x : -1, y : 1}, 7 : {x : 0,y : 1}, 8 : {x : 1,y : 1}  }
		var newCheckType = {}
		for(var i = 0 ; i < 9 ; i++){
			newCheckType[(i + checkType) % 9] = nowCheckType[i]
		}
		return newCheckType
	}
	wallCheck(x,y,checkType){
		if(x <= -1 || y <= -1 || x >= this.lengthX || y >= this.lengthY){
			return 0
		}
		if(this.map[y][x] == 1 || (this.check[checkType].x === 0 && this.check[checkType].y === 0)){
				return 0
			}
			else{
				return 1
			}
	}
	move(checkType,x,y){
		var marker = this.marker
		if( !x && !y && x != 0 && y != 0){
			var x = this.x
			var y = this.y
		}
		if(!checkType){
		checkType = 0
		}
		if(checkType > 8){
			checkType = checkType % 9
		}
		if(marker[y][x] >= 9){
			//return 0
			 x = x - this.check[checkType].x
			 y = y - this.check[checkType].y
			checkType += 1
			if(checkType > 8){
			checkType = checkType % 9
			}
			var changeX = x + this.check[checkType].x
			var changeY = y + this.check[checkType].y
			while((changeX < 0 || changeX > this.lengthX) && (changeY < 0 || changeY > this.lengthY)){
				checkType += 1
				if(checkType > 8){
					checkType = checkType % 9
				}
				changeX = x + this.check[checkType].x
				changeY = y + this.check[checkType].y
			}
			//return [checkType,changeX,changeY]
		}
		else{
		var changeX = x + this.check[checkType].x
		var changeY = y + this.check[checkType].y
		}
		var wall = this.wallCheck(changeX,changeY,checkType)
		if(wall === 0){
			checkType += 1
			marker[y][x] += 1
			return [checkType,x,y]
		}
		else{
			marker[changeY][changeX] += 1
			return [checkType,changeX,changeY]
		}
	}*/
	movefill(x,y){
		var map = this.map
		var marker = this.marker
		var stack = []
		if(map[y - 1][x - 1] != 1 && marker[y - 1][x - 1] == 0){
			marker[y - 1][x - 1] = 1
			stack.push({x : x - 1, y : y - 1})
		}
		if(map[y - 1][x] != 1 && marker[y - 1][x] == 0){
			marker[y - 1][x] = 1
			stack.push({x : x, y : y - 1})
		}
		if(map[y - 1][x + 1] != 1 && marker[y - 1][x + 1] == 0){
			marker[y -1 ][x + 1] = 1
			stack.push({x : x + 1, y : y - 1})
		}
		if(map[y][x - 1] != 1 && marker[y][x] == 0){
			marker[y][x -1] = 1
			stack.push({x : x - 1, y : y })
		}
		if(map[y][x + 1] != 1 && marker[y][x + 1] == 0){
			marker[y][x + 1] = 1
			stack.push({x : x + 1, y : y })
		}
		if(map[y + 1][x - 1] != 1 && marker[y + 1][x - 1] == 0){
			marker[y + 1][x - 1] = 1
			stack.push({x : x - 1, y : y + 1})
		}
		if(map[y + 1][x] != 1 && marker[y + 1][x] == 0){
			marker[y + 1][x] = 1
			stack.push({x : x, y : y + 1})
		}
		if(map[y + 1][x + 1] != 1 && marker[y + 1][x + 1] == 0){
			marker[y + 1][x + 1] = 1
			stack.push({x : x + 1, y : y + 1})
		}
		return stack
	}
}
function selectPlayerCharacter(value){
	var idValue = value.value
	var id = idValue.slice(1)
	if(!playerTeam.character[id]){	}
	else{
		if(playerTeam.character[id].selected === 0){
			playerTeam.character[id].selected = 1;
			value.style.backgroundColor = 'black';
		}
		else if(playerTeam.character[id].selected === 1){
			playerTeam.character[id].selected = 0;
			value.style.backgroundColor = 'white';
		}
	}
}
function search(){
	battleCheck =  0;
	if(Object.getOwnPropertyNames(playerTeam.character).length < 5){
	new CharacterHire()
	}
	createPartyGroup()
	document.getElementById('MiniMap').style.visibility = 'hidden';
	document.getElementById('Map').style.visibility = 'hidden';
	var code = document.getElementById("AreaSelect").value
	var level = document.getElementById("AreaLevel").value
	createEnemyGroup(code,level,'random')
	new BattleData
	CreateMap.prototype.changeOnPress(1)
	new BattleData
}
class InMapParty{
	constructor(){}
	
}
class SearchEnemy{
	constructor(){
		battleCheck = 0;
		this.createPlayerGroup()
	}
	createPlayerGroup(){
		var player = {}
		var character = playerTeam.character;
		var characterName = Object.getOwnPropertyNames(character)
		var length  = characterrName.length
		for(var i = 0 ; i < length;  i++){
			if(character[characterName[i]].selected === 1){
				player[characterName[i]]  = character[characterName[i]]
			}

	}
		var checkLength =  Object.getOwnPropertyNames(player).length
		if(checkLength <= 5 && checkLength >= 1){
			playerGroup = player
		}
		else{
			console.log('Error')
		}
	}
}
function createPartyGroup(){
	var party = {};
	var player = playerTeam.character;
	var playerName = Object.getOwnPropertyNames(player)
	var length  = playerName.length
	for(var i = 0 ; i < length;  i++){
		if(player[playerName[i]].selected === 1){
			party[playerName[i]]  = player[playerName[i]]
		}
	}
	if(party.length > 5){
		console.log('Max Party 5')
		return
	}
	else if(party.length < 1){
		console.log('Min Party 1')
		return
	}
	else{
		playerGroup = party
	}
}
function createEnemyGroup(code,level,type){
	var area = dataArea[code];
	var group = enemyGroup
	group = {};
	switch(type){
		case 'random' : 
			var value = Object.getOwnPropertyNames(playerGroup).length / 5
			var maxEncount = Math.round(area.maxRandomEncount * value)
			var minEncount = Math.ceil(area.minRandomEncount * value)
			for(var i = 0 ; i < maxEncount ;){
				if( i >= minEncount && i < maxEncount){
					var addCheck = Math.round(Math.random() * 0.8)
					if(addCheck === 1){
						break;
					}
				}
				var enemyStack = []
				var encountArray = area.randomMonster.slice(0)
				var length = encountArray.length;
				var enemyLevel = Math.ceil(Math.random() * 3 + level * 3)
				for( var j = 0 ; j < length; j++){
					var selectEnemy = Math.floor(Math.random() * length)
					var checkDice = Math.random() * 1000000;
					if(checkDice < encountArray[selectEnemy][1]){
						var enemy = new Enemy(encountArray[selectEnemy][0],enemyLevel,group.length)
						group[enemy.code] = enemy;
						i++
						break;
					}
				}
			}
		break;
	}
	enemyGroup = group
}
class Sight{
	constructor(){	
		this.solve = mapData.solve
		this.map = mapData.map
		var party = mapData.party
		var sigth = party.sigth / 2
		this.sigth = sigth ;
		this.sigthMin = Math.floor(sigth);
		this.sigthMax = Math.ceil(sigth + Math.abs(sigth % 2 - 1));
		this.x = party.x;
		this.y = party.y;
		this.lengthX = mapData.lengthX;
		this.lengthY = mapData.lengthY;
		this.checkXY()
		this.createDrawArray()
		this.blockCheck();
		this.drawPlayMap();
		this.drawMiniMap();
	}
	check(){
		var sigth = this.sigth
	}
	block(x,y,alpha,sigth){
		var darwArray = this.drawArray
		var minX = this.minX 
		var minY = this.minY
		var settingX = this.x
		var settingY = this.y
  if(alpha === 0){
    var inputType = 0;
    var setX = 0;
    var setY = 0;
    for(var j = 0; j <= sigth; j++){
      if( x === settingX &&  y < settingY){
      var inputX = settingX
      var inputY = settingY - j
      }
      else if( x === settingX && y >= settingY){
      var inputX = settingX
      var inputY = settingY + j
      }
      else if( y === settingY && x < settingX){
      var inputX = settingX - j
      var inputY = settingY
      }
      else if( y === settingY && x >= settingX){
      var inputX = settingX + j
      var inputY = settingY			
      } 
			if(inputX < 0 ){
				break;
			}
			else if(inputX > this.lengthX - 1 ){
				break;
			}
			if(inputY < 0 ){
				break;
      }
			else if(inputY > this.lengthY - 1 ){
        break;
      }
      if(inputType === 15){
				this.drawArray[inputY - minY][inputX - minX] = 15
      }
			else{
				this.drawArray[inputY - minY][inputX - minX] = this.map[inputY][inputX]
				this.solve[inputY][inputX] = this.map[inputY][inputX]
				if(this.map[inputY][inputX] === 1){
					inputType = 15
				}
			}
    }
  }
  else{
		var setBX = 0;
		var setBY = 0;
		var setGX = 0;
		var setGY = 0;
    for(var j = 0; j < sigth ; j+= 0.1){
      if(x > settingX && y <= settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = Math.ceil(j)
          var betaY = -Math.floor(Math.abs(j * alpha))
					var gammaX = Math.ceil(j)
					var gammaY = -Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = -Math.floor(j)
          var betaX = Math.floor(Math.abs(j / alpha))					
					var gammaY = -Math.floor(j)
					var gammaX = Math.ceil(Math.abs(j / alpha))
          }
      }
      else if(x <= settingX && y <= settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = -Math.floor(j)
          var betaY = -Math.floor(Math.abs(j * alpha))
					var gammaX = -Math.floor(j)
					var gammaY = -Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = -Math.floor(j)
          var betaX = -Math.floor(Math.abs(j / alpha))
					var gammaY = -Math.floor(j)
					var gammaX = -Math.ceil(Math.abs(j / alpha))
          }
      }
      else if(x > settingX && y > settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = Math.ceil(j)
          var betaY = Math.floor(Math.abs(j * alpha))
					var gammaX = Math.ceil(j)
					var gammaY = Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = Math.ceil(j)
          var betaX = Math.floor(Math.abs(j / alpha))					
					var gammaY = Math.ceil(j)
					var gammaX = Math.ceil(Math.abs(j / alpha))
          }
      }
      else if(x <= settingX && y > settingY){
        if(Math.abs(alpha) <= 1){
          var betaX = -Math.floor(j)
          var betaY = Math.floor(Math.abs(j * alpha))
					var gammaX = -Math.floor(j)
					var gammaY = Math.ceil(Math.abs(j * alpha))
          }
        else{
          var betaY = Math.ceil(j)
          var betaX = -Math.floor(Math.abs(j / alpha))
					var gammaY = Math.ceil(j)
					var gammaX = -Math.ceil(Math.abs(j / alpha))
          }
      }
      if((betaX === 0 || betaY === 0) || setBX === betaX && setBY === betaY ){}
      else{
        var inputY = settingY + betaY
        var inputX = settingX + betaX
				if(inputY > -1 && inputY < this.lengthY && inputX > -1 && inputX < this.lengthX){
					var length = Math.sqrt(Math.pow(betaX, 2) + Math.pow(betaY, 2));
					if(inputType === 15 || length > sigth){
						this.drawArray[inputY - minY][inputX - minX] = 15
					}
					else{
						this.drawArray[inputY - minY][inputX - minX] = this.solve[inputY][inputX] = this.map[inputY][inputX]
						if(this.solve[inputY][inputX] === 1){
							inputType = 15
						}
					}
				}
				setBX = betaX;
				setBY = betaY;
			}
      if((gammaX === 0 || gammaY === 0) || setGX === gammaX && setGY === gammaY ){}
      else{
        var inputY = settingY + gammaY
        var inputX = settingX + gammaX
				if(inputY > -1 && inputY < this.lengthY && inputX > -1 && inputX < this.lengthX){
					var length = Math.sqrt(Math.pow(betaX, 2) + Math.pow(betaY, 2));
					if(inputType === 15 || length > sigth){
						this.drawArray[inputY - minY][inputX - minX] = 15
					}
					else{
						this.drawArray[inputY - minY][inputX - minX] = this.solve[inputY][inputX] = this.map[inputY][inputX]						
						if(this.solve[inputY][inputX] === 1){
							inputType = 15
						}
					}
				}
				setGX = gammaX;
				setGY = gammaY;
			}
    }
  }
}
	checkXY(){
		var x = this.x
		var y = this.y
		var sigthMin = this.sigthMin;
		var sigthMax = this.sigthMax;
		var minX = x - sigthMin
		if(minX < 0){
			minX = 0;
		}
		var maxX = x + sigthMax
		if(maxX > this.lengthX){
			maxX = this.lengthX
		}
		var minY = y - sigthMin
		if(minY < 0){
			minY = 0;
		}
		var maxY = y + sigthMax
		if(maxY > this.lengthY){
			maxY = this.lengthY
		}
		this.minX = minX
		this.maxX = maxX
		this.minY = minY
		this.maxY = maxY
	}
	createDrawArray(){
		this.drawArray = []
		var length = Math.abs(this.sigthMax + this.sigthMin)
		for(var i = 0; i < length ; i++){
			this.drawArray[i] = []
			for(var j = 0 ; j < length ; j ++){
				this.drawArray[i][j] = 15
			}
		}
	}
	blockCheck(){
		var settingX = this.x
		var settingY = this.y		
		var sigth = this.sigth;
		var sigthMin = this.sigthMin;
		var sigthMax = this.sigthMax;
		var minX = this.minX 
		var maxX = this.maxX
		var minY = this.minY
		var maxY = this.maxY 
		var stack = {};
		for(var i = minY; i<maxY; i++){
			if(i === minY || i === maxY - 1){
				for( var j = minX; j < maxX; j++){
					var x = j - settingX;
					var y = i - settingY;
					if( x === 0 || y === 0){
						var alpha = 0;
					}
					else{
						var alpha = x / y
					}
					if( alpha != 0 && Math.abs(alpha) < 1 ){
						var inputAlpha = 1/Math.abs(alpha);
					}
					else{
						var inputAlpha = Math.abs(alpha)
					}
					if(!stack[inputAlpha]){
					stack[inputAlpha] = []
					}
					stack[inputAlpha].push( { x : j, y : i, alpha : alpha , sigth : sigth} )
				}
			}
			else{
				var y = i - settingY
				if(y === 0){
					var alphaMin = 0;
					var alphaMax = 0;
				}
				else{
					var alphaMin = (minX - settingX) / y
					var alphaMax = (maxX - 1 - settingX) / y
				}
				var inputMin = Math.abs(alphaMin)
				var inputMax = Math.abs(alphaMax)
				if( y != 0 ){
					if(inputMin < 1){
						inputMin = 1 / inputMin
					}
					if(inputMax < 1){
						inputMax = 1 / inputMax
					}
				}
				if(!stack[inputMax]){
					stack[inputMax] = []
				}
				if(!stack[inputMin]){
					stack[inputMin] = []
				}
				stack[inputMax].push( { x : (maxX - 1) , y : i , alpha : alphaMax, sigth : sigth} )				
				stack[inputMin].push( { x : minX , y : i , alpha : alphaMin, sigth : sigth} )
				
			}
		}
		var stackCheck = Object.getOwnPropertyNames(stack).sort();
		var stackLength = stackCheck.length
		for(var i = 0 ; i < stackLength; i++){
			var stackAlpha = stack[stackCheck[i]]
			var alphaLength = stackAlpha.length
			for( var j = 0 ; j < alphaLength; j++){
				this.block(stackAlpha[j].x, stackAlpha[j].y, stackAlpha[j].alpha, stackAlpha[j].sigth)
			}
		}
	}
	returnColor(value){
		var fillStyle  = ''
		switch(value){
			case 0:
				fillStyle = 'aliceblue'
				break;
			case 1:
				fillStyle = 'darkgray'
				break;
			case 5:
				fillStyle = 'gold'
				break;
			case 7:
				fillStyle = 'salmon'
				break;
			case 10:
				fillStyle = 'olivedrab'
				break;
			default : 
			case 15:
				fillStyle = 'black'
				break;
								}
		return fillStyle
	}
	drawPlayMap(){
		var canvas = document.getElementById('MapDraw');
		var Map = document.getElementById('Map');
		var inner = canvas.getContext('2d');
		var length = this.sigthMax + this.sigthMin
		var draw  = this.drawArray
		var baseX = this.x - this.minX
		var baseY = this.y - this.minY
		canvas.width = (length)*20
		canvas.height = (length)*20 
		Map.style.width = canvas.width + 'px'
		Map.style.height = canvas.height + 'px'
		for (var i = 0; i < length; i++) {
				for (var j = 0; j < length; j++) {
							inner.fillStyle = this.returnColor(draw[i][j])									
						if(baseX ===  j && baseY === i){
							inner.fillStyle = "aqua"
						}

					inner.fillRect((j)*20,(i)*20,20,20)
				}
			
		}
	}
	drawMiniMap(){
		var canvas = document.getElementById('MiniMapDraw');
		var Map = document.getElementById('MiniMap');
		var inner = canvas.getContext('2d');
		var solve = this.solve
		var lengthX = this.lengthX
		var lengthY = this.lengthY
		canvas.width = (this.lengthX)*4
		canvas.height = (this.lengthY)*4
		Map.style.width = canvas.width + 'px'
		Map.style.height = canvas.height + 'px'
		for (var i = 0; i < lengthY; i++) {
				for (var j = 0; j < lengthX; j++) {

							inner.fillStyle = this.returnColor(solve[i][j])									
						if(this.x ===  j && this.y === i){
							inner.fillStyle = "aqua"
						}
					inner.fillRect((j)*4,(i)*4,4,4)
				}
			
		}
	}
}
class State{ 
	constructor(performer,baseState,job,tribe,type){
		if(type || type === 0){
			this.job = dataJob[performer.job]
			this.tribe = dataTribe[performer.tribe]
			this.bonus = this.summaryBonus(type)
			this.state = this.calculrateState(baseState)
			return this.state
		}
		else if(performer){
		this.baseState = performer.baseState
		this.job = dataJob[performer.job]
		this.tribe = dataTribe[performer.tribe]
		this.bonus = this.summaryBonus()
		this.state = this.calculrateState()
		performer.origin.state = this.state
		}
		else{
			this.baseState = baseState
		this.job = dataJob[job]
		this.tribe = dataTribe[tribe]
		this.bonus = this.summaryBonus()
		this.state = this.calculrateState()
			return this.state
		}
	}
	summaryBonus(number){
		if(!number && number != 0){
		var bonus = {}
		var stateName = Object.getOwnPropertyNames(this.baseState)
		var length = stateName.length
		var jobBonus = this.job.state
		var tribeBonus = this.tribe.state
		for(var i = 0 ; i < length ; i ++){
			if(!jobBonus[stateName[i]] && jobBonus[stateName[i]] != 0){
				var bonusJ = 100
			}
			else{
				var bonusJ = jobBonus[stateName[i]]
				}
			if(!tribeBonus[stateName[i]] && tribeBonus[stateName[i]] != 0){
				var bonusT = 100
			}
			else{
				var bonusT = tribeBonus[stateName[i]] 
				}
			bonus[stateName[i]] = (bonusJ  * bonusT ) / 100
		}
		}
		else{
			var jobBonus = this.job.state
		var tribeBonus = this.tribe.state
			if(!jobBonus[nameState[number]] && jobBonus[nameState[number]] != 0){
				var bonusJ = 100
			}
			else{
				var bonusJ = jobBonus[nameState[number]]
				}
			if(!tribeBonus[nameState[number]] && tribeBonus[nameState[number]] != 0){
				var bonusT = 100
			}
			else{
				var bonusT = tribeBonus[nameState[number]] 
				}
			bonus = (bonusJ  * bonusT ) / 100
		}
		return bonus
	}
	calculrateState(base){
		if(!base){
		var state = {}
		var stateName = Object.getOwnPropertyNames(this.baseState)
		var length = stateName.length
		for(var i = 0 ; i < length ; i++){
			state[stateName[i]] = Math.round(this.bonus[stateName[i]] * this.baseState[stateName[i]] / 100)
		}
		}
		else{
			state = Math.round(this.bonus * base / 100)
		}
		return state
	}
}
class Tribe{
	constructor(performer){
		
	}
}
class Rebirth{
	constructor(performer){
		
	}
}
class Job{
	constructor(performer){
		
	}
}
class Health{
	constructor(type , state , color , base , level , subType){
		var hp = this.calculrateHp(state.vit,state.wis,state.str,state.int)
		var mp = this.calculrateMp(state.wis,state.int)
		var sp = this.calculrateSp(state.vit,state.str)
		this.hp = hp
		this.mHp = hp
		this.mp = mp
		this.mMp = mp
		this.sp = sp
		this.mSp = sp
		if(type ==='enemy'){
    this.addBaseValue(base,level)
			}
	}
	calculrateHp(vit,wis,str,int){
		var valueVW = Math.pow( (vit + wis) * 7 , 2 / 3) 
		var valueSI = Math.pow( (str + int) * Math.sqrt(6) , 2 / 3)
		var hp = Math.floor(valueVW + valueSI)
		if(!hp){
			hp = 1
		}
		return hp
	}
	calculrateMp(wis,int){
		var mp = Math.floor(Math.pow( wis * 17 + int * Math.PI , 2 / Math.PI))
		return mp
	}
	calculrateSp(vit,str){
		var sp = Math.floor(Math.pow( vit * 17 + str * Math.PI , 2 / Math.PI))
		return sp
	}
	addBaseValue(base,level){
		if(!level){
			level = 1
		}
		else{
			level = 1 + level / 5
		}
		var baseName = Object.getOwnPropertyNames(base)
		var length = baseName.length
		for(var i = 0 ; i < length; i++){
			this[baseName[i]] += Math.floor(base[baseName[i]] * level)
		}
	}
}
class Option{
	constructor(performer,situation,option,state,target){
		this.performer = performer
		if(!option && !state){
			this.selectValueObject(situation)
		}
		else{
			this.option = option
			this.state = state
		}
		if(!target){
			target = 'all'
		}
		else{
		}
		this.calculrateAtk(target)
		this.calculrateRes(target)
		this.calculrateRate(target)
		this.calculrateRapid(target)
		if(target != 'all'){
			return
		}
		else if(situation === 'inBattle'){
			this.battleOption = {}
			this.summaryBattleOption()
			performer.option.battle = this.battleOption
		}
		else{
			return this.option
		}
	}
	valueTan(value){
		var checkValue = value;
		var radian = Math.PI / 180
		if(checkValue >= 57.289961630759424687278147537113){
			var alpha = 18;
		}
		else{
			var alpha = 0;
		}
		for(; alpha < 18; alpha++){
			if(checkValue < Math.tan(radian * (alpha * 5 + 5))){
				break;
			}
		}
		if(alpha === 18){
			var beta = 89
			for(var i = 0 ; beta < 90 ; i ++){
				var addValue = 0.9 * Math.pow(0.1,i)
				var down = Math.tan(radian*beta)
				var up = Math.tan(radian*(beta+addValue))
				if(checkValue >=down && checkValue < up){
					var returnValue = beta + Math.round((checkValue - down)/(up - down) * 100000 * addValue) / 100000
					return returnValue
				}
				beta += addValue
			}
			if(beta >= 90){
				var returnValue = 90
				return returnValue
			}
		}
		else{
			for(var i = 0 ; i < 5; i++){
				var beta = alpha * 5 + i 
				var down = Math.tan(radian*beta);
				var up = Math.tan(radian*(beta+1))
				if(checkValue >=down && checkValue < up){
					var returnValue = beta + Math.round((checkValue - down)/(up - down) * 100000) / 100000
					return returnValue
				}
			}
		}
	}
	valueState(state){
    if(state <= 14640 ){
      var main = Math.sqrt(Math.pow(Math.pow(state,Math.E) / 250,Math.PI))
      var value =  Math.pow(Math.sqrt(Math.pow(Math.pow(100,Math.E) / 250,Math.PI)),0.3685) / (Math.pow(11 - Math.sqrt(Math.sqrt(state)),3))
			var divValue = this.valueTan(value) / 89.99999999999999 * 89;
      }
    else{
			var stateExCount = Math.floor(state / 14641);
			var stateOver = Math.floor(state % 14641);
      var main = Math.sqrt(Math.pow(Math.pow(state,Math.E) / 250,Math.PI))
      //var firstValue = Math.pow(Math.sqrt(Math.pow(Math.pow(100,Math.E) / 250,Math.PI)),0.3685) / (Math.pow(11 - 10.999812166488725561794533735179,3))
			var divValue = 89;
			for( var i = 0 ; i < stateExCount ; i ++){
				if( i === stateExCount - 1){
				var addValue =  Math.pow(Math.sqrt(Math.pow(Math.pow(100,Math.E) / 250,Math.PI)),0.3685) / (Math.pow(11 - Math.sqrt(Math.sqrt(stateOver)),3))
				var add = this.valueTan(addValue) / 89.99999999999999 *  0.9 * Math.pow(0.1,i)
				divValue += add
				}
				else{
				divValue += 0.9 * Math.pow(0.1,i)
				}
			}
    }
    
    var calculrateValue = Math.ceil(Math.pow(state,0.75) / Math.sqrt((90000 - divValue * 1000) / 1000) * Math.sqrt(main / 1185.5173380429778) + Math.pow(state / 10,1.5))
    return calculrateValue
  }
	valueAtk(state){
			var value  = Math.pow(this.valueState(state),1.75/3) + Math.floor(state / 25)
				var i = 0;
				var alpha = 0;
				var beta = 1;
				var length = Math.floor(value).toString().length;
				var atk = 0;
				for(i = 0; i<=length; i++){
					alpha = Math.pow(10,i);
					if(i != 0){
						beta *= i;
					}
					atk += Math.pow(Math.floor(value / alpha)*beta,4/5);
				}
				return Math.round(atk);
			}
	valueRes(state){
     var def =  this.valueState(state); 
     var value = (state > 100) ? Math.pow(state - 1,1/5) : Math.pow((state - 1) / 100,1 / 5)
      var defPer = Math.floor(Math.floor(Math.sqrt(Math.pow(Math.pow(Math.round(def - 1) / 765,1/5.738192445132472) + value,2) / 90) / 102.04 * 9999000) / 100.00590059005900590059) / 100
      var defNum = Math.floor(Math.pow(this.valueState(state) / 100,1 / 2.7) * 10 - 1) + Math.round(Math.pow(state - 1,3 / 5) / 20)
      return [defPer,defNum]
    }
	valueRate(state,type){
		var radian = Math.PI / 180
		var value = this.valueState(state)
		if(state <= 14641){	
			var rate = Math.round(Math.sin(Math.pow(Math.ceil(Math.pow(Math.floor(Math.pow(value,8 / 9) * 100),1 / 6) / Math.pow((101 - state / 14641 * 100) / 250,1 / Math.PI)) * Math.sqrt(Math.pow(state / 14641 * 100,1 / 4)/Math.E),0.8059631184268222) * radian / 392.3550073787575 * 90) * 100)
      }
		else{
			var value = (4641.5 + (Math.floor((state - 14641) / 14641) * 100 + state % 14641) / 100) * 0.001
			if(value < 4.6415){
				value = 4.6415
			}
			var rate = Math.floor(Math.pow(value,3))
			}
		rate = rate / 100*type
		return rate;
	}
	selectValueObject(situation){
		var performer = this.performer
		switch(situation){
			case 'inBattle' :
				this.option = performer.option.origin
				this.state = performer.state.battle
				this.base = performer.option.add
				this.change = performer.option.change
				break;
			case 'battle' :
				this.option = performer.battle.option
				this.state = performer.battle.state
				break;
			case 'origin' :
				this.option = performer.origin.option
				this.state = performer.origin.state
				break;
		}
	}
	calculrateAtk(target){
		switch(target){
			case 'atkPhy' :
				this.option.atkPhy = this.valueAtk(this.state.str)
				break;
			case 'atkMag' :
				this.option.atkMag = this.valueAtk(this.state.int)
				break;
			case 'all' :
				this.option.atkPhy = this.valueAtk(this.state.str)
				this.option.atkMag = this.valueAtk(this.state.int)
				break;
					 }
	}
	calculrateRes(target){
		switch(target){
			case 'defPhy' :
				var phyRes = this.valueRes(this.state.vit)
				this.option.resPhyPer = phyRes[0]
				this.option.resPhyNum = phyRes[1]
				break;
			case 'defMag' :
				var magRes = this.valueRes(this.state.wis)
				this.option.resMagPer = magRes[0]
				this.option.resMagNum = magRes[1]
				break;
			case 'all' :
				var phyRes = this.valueRes(this.state.vit)
				this.option.resPhyPer = phyRes[0]
				this.option.resPhyNum = phyRes[1]
				var magRes = this.valueRes(this.state.wis)
				this.option.resMagPer = magRes[0]
				this.option.resMagNum = magRes[1]
				break;
					 }
	}
	calculrateRate(target){
		switch(target){
			case 'rateHit' :
				this.option.rateHit = 30 + this.valueRate(this.state.dex,69)
				break;
			case 'rateDodge' :
				this.option.rateDodge = 30 + this.valueRate(this.state.agi,69)
				break;
			case 'rateDis' :
				this.option.rateDis = 30 + this.valueRate(this.state.dis,99)
				break;
			case 'rateRes' :
				this.option.rateRes = 30 + this.valueRate(this.state.res,99)
				break;
			case 'rateCrtLuk' :
				this.option.rateCrtLuk = 0 + this.valueRate(this.state.dex,77)
				break;
			case 'rateDodgeLuk' :
				this.option.rateDodgeLuk = -10 + this.valueRate(this.state.dex,77)
				break;
			case 'all' :
				this.option.rateHit = 30 + this.valueRate(this.state.dex,69)
				this.option.rateDodge = 30 + this.valueRate(this.state.agi,69)
				this.option.rateDis = 30 + this.valueRate(this.state.dis,99)
				this.option.rateRes = 30 + this.valueRate(this.state.res,99)
				this.option.rateCrtLuk = 0 + this.valueRate(this.state.dex,77)
				this.option.rateDodgeLuk = -10 + this.valueRate(this.state.dex,77)
				break;
					 }
	}
	calculrateRapid(target){
		if(target === 'atkRapid' || target === 'all'){
		var atkRapid = 10000 / Math.pow(Math.log(this.valueState(this.state.spd) + 1) * 0.87,1/3) 
		this.option.atkRapid = (atkRapid < 1000) ? 1000 : atkRapid
		}
	}
	summaryBattleOption(){
		var optionName = Object.getOwnPropertyNames(this.option)		
		var baseName = Object.getOwnPropertyNames(this.base)		
		var changeName = Object.getOwnPropertyNames(this.change)
		for( var i = 0 , length = optionName.length ; i < length ; i++){
			if(!this.battleOption[optionName[i]]){
				this.battleOption[optionName[i]] = 0
			}
			this.battleOption[optionName[i]] += this.option[optionName[i]]
		}
		for( var i = 0 , length = baseName.length ; i < length ; i++){
			if(!this.battleOption[baseName[i]]){
				this.battleOption[baseName[i]] = 0
			}
			this.battleOption[baseName[i]] += this.base[baseName[i]]
		}
		for( var i = 0 , length = changeName.length ; i < length ; i++){
			if(!this.battleOption[changeName[i]]){
				this.battleOption[changeName[i]] = 0
			}
			this.battleOption[changeName[i]] += this.change[changeName[i]]
		}
	}
}
function calculrateElement(perforemr,situation,element,base){
		if(performer){
		switch(situation){
			case 'battle' :
				element = performer.battle.element
				var elementBase = performer.battle.element.base
				break;
			case 'now' : 
				element = performer.now.element
				var elementBase = performer.now.element.base
				break;
			case 'origin' :
				element = performer.origin.element
				var elementBase = performer.origin.element.base
				break;
		}
		}
	if(base){
		if(base.base){
			for(var i = 0; i< 8 ; i++){
				if(base.base[nameElement[i]]){
					element.base[nameElement[i]] += base.base[nameElement[i]]
				}
			}
		}
		for(var i = 1 ; i < 6; i++){
			if(base[nameOptionElement[i]]){
				for(var j = 0; j< 8 ; j++){
					if(base[nameOptionElement[i]][nameElement[j]]){
						element[nameOptionElement[i]][nameElement[j]] += base[nameOptionElement[i]][nameElement[j]]
					}
				}
			}
		}
	}
	return element;
}
function colorConvert(baseType,performer,color) {
    var returnColor = {
        red: 0,        green: 0,        blue: 0,
        cyan: 0,        magenta: 0,        yellow: 0,        black: 0,
        hue: 0,        saturation: 0,        value: 0
    }
	 if(!color){
    color = performer.color
	 }
    if (baseType === 'rgb' || baseType === 'cmyk') {
        if (baseType === 'rgb') {
            var red = color.red / 255;
            var green = color.green / 255;
            var blue = color.blue / 255;
            var colorMax = Math.max(red, green, blue);
            var colorMin = Math.min(red, green, blue);
            var black = (1 - colorMax);
            returnColor.cyan = Math.round((1 - red - black) / (1 - black) * 255);
            returnColor.magenta = Math.round((1 - green - black) / (1 - black) * 255);
            returnColor.yellow = Math.round((1 - blue - black) / (1 - black) * 255);
            returnColor.black = Math.round(black * 255)
            var delta = colorMax - colorMin;
        } else if (baseType === 'cmyk') {
            var black = color.black / 255;
            var cyan = color.cyan / 255;
            var magenta = color.magenta / 255;
            var yellow = color.yellow / 255;
            var red = Math.round((1 - cyan) * (1 - black) * 255) / 255;
            var green = Math.round((1 - magenta) * (1 - black) * 255) / 255;
            var blue = Math.round((1 - yellow) * (1 - black) * 255) / 255;
            var colorMax = Math.max(red, green, blue);
            var colorMin = Math.min(red, green, blue);
            var delta = colorMax - colorMin;
            returnColor.cyan = color.cyan
            returnColor.magenta = color.magenta
            returnColor.yellow = color.yellow
            returnColor.black = color.black
        }
        var hue = 0;
        var saturation = 0;
        var value = 0;
        if (delta === 0) {
            hue = 0;
        } else if (colorMax === red) {
            hue = ((green - blue) / delta) % 6;
        } else if (colorMax === green) {
            hue = (blue - red) / delta + 2;
        } else if (colorMax === blue) {
            hue = (red - green) / delta + 4;
        }
        hue *= 60
        if (hue < 0) {
            hue += 360;
        }
        value = colorMax;
        if (colorMax === 0) {
            saturation = 0;
        } else {
            saturation = delta / colorMax;
        }
        saturation *= 100;
        value *= 100;
        returnColor.saturation = Math.round(saturation * 10) / 10
        returnColor.value = Math.round(value * 10) / 10;
        returnColor.hue = Math.round(hue * 10) / 10
        returnColor.red = Math.round(red * 255)
        returnColor.green = Math.round(green * 255)
        returnColor.blue = Math.round(blue * 255)
        return returnColor
    } else if (baseType === 'hsv') {
        var hue = color.hue / 60;
        var saturation = color.saturation / 100;
        var value = color.value / 100;
        var chroma = value * saturation;
        var x = chroma * (1 - Math.abs(hue % 2 - 1));
        var m = value - chroma
        var red = 0;
        var green = 0;
        var blue = 0;
        switch (Math.floor(hue)) {
        case 0:
            red = chroma;
            green = x;
            break;
        case 1:
            green = chroma;
            red = x;
            break;
        case 2:
            green = chroma;
            blue = x;
            break;
        case 3:
            blue = chroma;
            green = x;
            break;
        case 4:
            blue = chroma;
            red = x;
            break;
        case 5:
            red = chroma;
            blue = x;
            break;
        }
        red = (red + m);
        green = (green + m);
        blue = (blue + m);
        var colorMax = Math.max(red, green, blue);
        var colorMin = Math.max(red, green, blue);
        returnColor.red = Math.round(red * 255);
        returnColor.green = Math.round(green * 255);
        returnColor.blue = Math.round(blue * 255);
        var black = (1 - colorMax);
        returnColor.cyan = Math.round((1 - red - black) / (1 - black) * 255);
        returnColor.magenta = Math.round((1 - green - black) / (1 - black) * 255);
        returnColor.yellow = Math.round((1 - blue - black) / (1 - black) * 255);
        returnColor.black = Math.round(black * 255)
        returnColor.saturation = color.saturation
        returnColor.value = color.value;
        returnColor.hue = color.hue
        return returnColor
    }
}
function changeStatusView(performer){
	var disorder = performer.disorder
	var disorderName = Object.getOwnPropertyNames(disorder)
	var performerCode = performer.code
	var healthName = Object.getOwnPropertyNames(performer.health)
  for(var i = 0 ; i < 3; i ++){
    var div = document.getElementById(performerCode + healthName[3+i].toString().toUpperCase());
		var width =  performer.health[healthName[3+i]] /  performer.health[healthName[i]]
		if(width < 0){
			width = 0;
		}
    div.style.width = width * 100 + '%'
		if( i === 0 && disorderName.indexOf('poision') != -1){
			div.style.backgroundColor = 'purple'
		}
		else if( i === 0){
			div.style.backgroundColor = 'red'
		}
  }
}
function createStatusView(performer){
  var performerCode = performer.code
  var code = performerCode.slice(1);
  var type = performerCode.slice(0,1);
  var parent = ''
  switch(type){
    case 'P':
      parent = document.getElementById('playerBorder')
			if(performer.coordinates === 'front'){
				parent = parent.children[0]
			}
			else if(performer.coordinates === 'back'){
				parent = parent.children[1]
			}
      break;
    case 'E':
      parent = document.getElementById('enemyBorder')
			if(performer.coordinates === 'front'){
				parent = parent.children[1]
			}
			else if(performer.coordinates === 'back'){
				parent = parent.children[0]
			}
      break;
             }
  var stateBorder = document.createElement('div');
  stateBorder.className = 'StateBorder'
	stateBorder.id = performer.code + 'Border'
  var name = document.createElement('div');
  name.className = 'Name';
	if(!performer.title){
		name.innerHTML = 'Lv.' + performer.level + '  ' + performer.name
	}
	else if(performer.title){
		name.innerHTML += 'Lv.' + performer.level + '  ' + '<ruby>' + performer.name + '<rt>' + performer.title + '</rt><ruby>'
	}
  var typeBorder = document.createElement('div');
  typeBorder.className = 'Type'
  var tribe = document.createElement('div');
  tribe.className = 'Tribe'
  tribe.innerText = dataTribe[performer.tribe].name
  var job = document.createElement('div');
  job.className = 'Job'
  job.innerText = dataJob[performer.job].name
  typeBorder.appendChild(job)
  typeBorder.appendChild(tribe)
  var health  = document.createElement('div');
  health.className = 'Health'
  var healthName = Object.getOwnPropertyNames(performer.health)
  for(var i = 0 ; i < 3; i ++){
    var divP = document.createElement('div');
    divP.className = 'Max'
    var divC = document.createElement('div');
    divC.id = performerCode + healthName[3+i].toString().toUpperCase()
    divC.className =healthName[3+i].toString().toUpperCase()
    divC.style.width = performer.health[healthName[3+i]] /  performer.health[healthName[i]] * 100
    divP.appendChild(divC)
    health.appendChild(divP)
  }
	var gaugeM = document.createElement('div');
	gaugeM.className = 'Max'
	var gauge = document.createElement('div');
	gauge.id = performerCode + 'Gauge'
	gauge.className = 'Gauge'
	gaugeM.appendChild(gauge)
	health.appendChild(gaugeM)
	stateBorder.appendChild(name)
  stateBorder.appendChild(typeBorder)
  stateBorder.appendChild(health)
  parent.appendChild(stateBorder)
}
function clearStatusView(){
	var player = document.getElementById('playerBorder')
	var front = document.createElement('div');
	var back = document.createElement('div');
	front.className = 'PFront'
	back.className  = 'PBack'
	player.innerHTML = ''
	player.appendChild(front)
	player.appendChild(back)
	var enemy = document.getElementById('enemyBorder')
	var front = document.createElement('div');
	var back = document.createElement('div');
	front.className = 'EFront'
	back.className  = 'EBack'
	enemy.innerHTML = ''
	enemy.appendChild(back)
	enemy.appendChild(front)
}
class MoveInMap{
	constructor(evt,keyCode,moveTargetType,targetNumber){
		this.selectPerformer(moveTargetType,targetNumber)
		this.map = mapData.map
		if(!keyCode && !moveTargetType){
			keyCode = evt.which ? evt.which : event.keyCode;
		}
		this.direction = this.checkDirection(keyCode)
		if(!this.direction){
			return
		}
		this.x = this.performer.x
		this.y = this.performer.y
		this.lengthX = mapData.lengthX;
		this.lengthY = mapData.lengthY;
		this.checkMove()


	}
	selectPerformer(moveTargetType,targetNumber){
		switch(moveTargetType){
			default :
			case 'player' :
				this.performer = mapData.party
				break;
			case 'enemy' :
				this.performer = mapData.positionOfEnemy[targetNumber]
				break;
												 }
	}
	checkDirection(keyCode){
		var directionName = ['NE','N','NW','E','Stay','W','SE','S','SW']
		var check = 0
		if(!keyCode){
			//this.moveParttern
			check = directionName[Math.floor(Math.random() * 9)]
		}
		else{
			check = directionName[keyCode - 49]
		}
	}
	checkMove(){
		var map = this.map
		var x = this.x
		var y = this.y
		var lengthX = this.lengthX;
		var lengthY = this.lengthY;
		var performer = this.performer
		switch (this.direction) {
		case 'NE':
        if (y + 1 < lengthY && x - 1 > -1) {
            if (map[y + 1][x - 1] != 1) {
                performer.x -= 1;
                performer.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'N':
        if (y + 1 < lengthY) {
            if (map[y + 1][x] != 1) {
                performer.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'NW':
        if (y + 1 < lengthY && x + 1 < lengthX) {
            if (map[y + 1][x + 1] != 1) {
                performer.x += 1;
                performer.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'E':
        if (x - 1 > -1) {
            if (map[y][x - 1] != 1) {
                performer.x -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'Stay':
        console.log('stay')
        break;
    case 'W' :
        if (x + 1 < lengthX) {
            if (map[y][x + 1] != 1) {
                performer.x += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'SE': 
        if (y - 1 > -1 && x - 1 > -1) {
            if (map[y - 1][x - 1] != 1) {
                performer.x -= 1;
                performer.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'S':
        if (y - 1 > -1) {
            if (map[y - 1][x] != 1) {
                performer.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 'SW':
        if (y - 1 > -1 && x + 1 < lengthX) {
            if (map[y - 1][x + 1] != 1) {
                performer.x += 1;
                performer.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    default:
        return;
    }
	}
}
function moveMap(evt,keyCode) {
	var map = mapData.map
	var party = mapData.party
	var x = party.x
	var y = party.y
	var exit = mapData.exit
	var start = mapData.start
	var lengthX = mapData.lengthX;
	var lengthY = mapData.lengthY;
	var turn = mapData.turn
	if(!keyCode){
		var keyCode = evt.which ? evt.which : event.keyCode;
	}
	switch (keyCode) {
		case 49:
        if (y + 1 < lengthY && x - 1 > -1) {
            if (map[y + 1][x - 1] != 1) {
                party.x -= 1;
                party.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 50:
        if (y + 1 < lengthY) {
            if (map[y + 1][x] != 1) {
                party.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 51:
        if (y + 1 < lengthY && x + 1 < lengthX) {
            if (map[y + 1][x + 1] != 1) {
                party.x += 1;
                party.y += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 52:
        if (x - 1 > -1) {
            if (map[y][x - 1] != 1) {
                party.x -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 53:
        console.log('stay')
        break;
    case 54:
        if (x + 1 < lengthX) {
            if (map[y][x + 1] != 1) {
                party.x += 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 55 : 
        if (y - 1 > -1 && x - 1 > -1) {
            if (map[y - 1][x - 1] != 1) {
                party.x -= 1;
                party.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 56:
        if (y - 1 > -1) {
            if (map[y - 1][x] != 1) {
                party.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    case 57:
        if (y - 1 > -1 && x + 1 < lengthX) {
            if (map[y - 1][x + 1] != 1) {
                party.x += 1;
                party.y -= 1;
            } else {
                console.log('wall');
            }
        } else {
            console.log('out');
        }
        break;
    default:
        return;
    }
    new Sight;
    //document.getElementById('nowTurn').value = turn;
	mapData.checkTurn(keyCode);
}
class CharacterDesk{
	constructor(performerNumber){
		var idValue = performerNumber.value
		var id = idValue
		this.changeCharacterList('none')
		this.id = id
		if(!playerTeam.character[id]){	
		return }
		else{
			this.performer = playerTeam.character[id]
		}
		var desk = document.getElementById('CharacterDesk')
		desk.innerHTML=''
		desk.value = this.id
		var stateView = this.createStateView()
		var close = this.createCloseButton()
		var protectAndPosition = document.createElement('div');
		var protectPosition = document.createElement('div');
		protectPosition.className = 'ProtectAPosition'
		var protectMenu = this.createProtectMenu()
		var positionMenu = this.createPositionMenu()
		protectPosition.appendChild(protectMenu)
		protectPosition.appendChild(positionMenu)
		protectAndPosition.appendChild(protectPosition)
		var PAPChangeButton = this.createProtectAndPositionChangeButton()
		protectAndPosition.appendChild(PAPChangeButton)
		var equipSlot = this.createViewEquipment()
		var inventorySlot = this.createEquipmentInventory()
		desk.appendChild(close)
		desk.appendChild(stateView)
		desk.appendChild(protectAndPosition)
		desk.appendChild(equipSlot)
		desk.appendChild(inventorySlot)
		addEventListner.prototype.addEvent()
	}
	changeCharacterList(type){
		var level = document.getElementsByClassName('level')
		var tribe = document.getElementsByClassName('tribe')
		var length = level.length
		for(var i = 0 ; i < length; i++){
			level[i].style.display = type
			tribe[i].style.display = type
		}
	}
	refreshStateView(){
		var state = document.getElementById('StateView')
		var number = document.getElementById('CharacterDesk').value
		var div = CharacterDesk.prototype.createStateView(number)
		state.innerHTML = div.innerHTML
	}
	createStateView(number){
		var stateView = document.createElement('div');
		var stateLength = nameState.length
		stateView.className = 'StateView'
		stateView.id = 'StateView'
		for(var i = 0; i< stateLength/2; i++){
			var div = document.createElement('div');
			div.className="StateOption"
			var firstStateDiv = document.createElement('div');
			firstStateDiv.className = 'StateOptionText'
			var firstStateText = document.createElement('div');
			firstStateText.className = 'TEXT'
			firstStateText.innerText = nameState[i * 2];
			firstStateDiv.appendChild(firstStateText)
			div.appendChild(firstStateDiv)
			var firstState = this.createViewState(i * 2 , number);
			div.appendChild(firstState)
			var secondStateDiv = document.createElement('div');
			secondStateDiv.className = 'StateOptionText'
			var secondStateText = document.createElement('div');
			secondStateText.className = 'TEXT'
			secondStateText.innerText = nameState[i * 2 + 1];
			secondStateDiv.appendChild(secondStateText)
			div.appendChild(secondStateDiv)
			var secondState = this.createViewState(i * 2 + 1, number);
			div.appendChild(secondState)
			stateView.appendChild(div)
		}
		var bonus = this.createBonusState(number)
		stateView.appendChild(bonus)
		return stateView
	}
	createBonusState(number){
		if(!number && number != 0){
			var performer = this.performer
		}
		else{
			var performer = playerTeam.character[number]
		}
		var bonus = performer.bonusState
		var div = document.createElement('div');
		div.className = 'StateOption'
		var bonusDiv = document.createElement('div');
		bonusDiv.className = 'BonusStateText'
		bonusDiv.innerText = 'BonusState '
		var bonusStateText = document.createElement('div');
		bonusStateText.className = 'BonusState'
		bonusStateText.id = 'BonusState'
		bonusStateText.value = bonus
		bonusStateText.innerText = bonus;	
		div.appendChild(bonusDiv)
		div.appendChild(bonusStateText)
		var applyButton = this.createStateApplyButton()
		div.appendChild(applyButton)
		var resetButton = this.createStateResetButton()
		div.appendChild(resetButton)
		return div
	}
	createStateApplyButton(){
		var div = document.createElement('div');
		div.className = 'ApplyButton Button'
		div.innerText = 'Apply'
		return div
	}
	createStateResetButton(){
		var div = document.createElement('div');
		div.className = 'ResetButton Button'
		div.innerText = 'Reset'
		return div
	}	
	createCloseButton(){
		var div = document.createElement('div');
		div.className = 'CloseCircle'
		div.addEventListener('click',
																		 function(){
					this.parentNode.innerHTML = ''
			CharacterDesk.prototype.changeCharacterList('block')
				})
		return div
	}
	createPositionMenu(){
		var div = document.createElement('div');
		div.className = 'Position'
		var pFirst = document.createElement('p');
		pFirst.innerText = 'Position Select'
		div.appendChild(pFirst)
		var positionSelect = document.createElement('div');
		positionSelect.className = 'PositionSelecter'
		var name = ['forward' , 'back']
		for( var i = 0 ; i < 2 ; i++){
		var input = document.createElement("input")
		input.setAttribute("type", "radio")
		input.setAttribute("name", "position")
		input.value = name[i]
		input.id = name[i]+'Position'
		input.className = 'PositionRadio'
			if(this.performer.coordinates == name[i]){
				input.checked = true
			}
		var label = document.createElement("label")
		label.setAttribute("for", name[i] + "Position")
		label.className = "PositionLabel "+ name[i] +"Position"
		label.innerText= name[i]
			positionSelect.appendChild(input)
			positionSelect.appendChild(label)			
		}
		var span = document.createElement("span")
		span.className = 'PositionSelect'
		positionSelect.appendChild(span)
		div.appendChild(positionSelect)
		return div
	}
	createProtectMenu(){
		var div = document.createElement('div');
		div.className = 'Protect'
		var pFirst = document.createElement('p');
		pFirst.innerText = 'Protect Type'
		div.appendChild(pFirst)
		var select = document.createElement('select')
		select.id = 'ProtectSelect'
		var optionValue = ['Always','HP Percent','Random','None']
		for(var i = 0 ; i < 4; i ++){
			var option = document.createElement('option')
			option.value = optionValue[i]
			option.innerText = optionValue[i]
			select.appendChild(option)
		}
		select.selectedIndex = optionValue.indexOf(this.performer.protectType[0])
		div.appendChild(select)
		var input = document.createElement("input")
		input.setAttribute("type", "number")
		input.id = 'ProtectNumber'
		input.setAttribute("min", 0)
		var value = this.performer.protectType[1]
		input.value = value
		div.appendChild(input)
		return div
	}
	createProtectAndPositionChangeButton(){
		var button = document.createElement('button')
		button.innerText = 'Change'
		button.className = 'ChangeProtectPosition Button'
		button.value = this.id
		button.addEventListener('click',
													 function(){
			var performer = playerTeam.character[this.value]
			performer.protectType[0] = document.getElementById('ProtectSelect').value
			performer.protectType[1] = document.getElementById('ProtectNumber').value
			performer.coordinates = (document.getElementById('forwardPosition').checked) ? 'front': 'back' ;
		}
													 )
		return button
	}
	createViewEquipment(number){
		if(!number){
			var equip = this.performer.equip
			var id = this.id
		}
		else{
			var performer = playerTeam.character[number]
			var equip = performer.equip
			var id = number
		}
		var div = document.createElement('div');
		div.id = 'EquipSelect'
		var tittle = document.createElement('p');
		tittle.className = "EquipmentTittle"
		tittle.innerText = 'Equip'
		div.appendChild(tittle)
		var summaryOption = this.createEquipmentSummaryOption(id)
		div.appendChild(summaryOption)
		var equipSlot = document.createElement('div');
		equipSlot.className = 'ItemEquip'
		var type = Object.getOwnPropertyNames(equip)
		for(var i = 0, typeLength = type.length; i < typeLength ; i++){
			if(!number){
			var slotDiv = this.createEquipmentSlot(type[i])
			}
			else{
				var slotDiv = this.createEquipmentSlot(type[i],performer)
			}
			equipSlot.appendChild(slotDiv)
		}
		var button = document.createElement('button');
		button.className = 'ItemButton RemoveButton Button'
		button.innerText = 'Remove'
		button.value = id
		equipSlot.appendChild(button)
		div.appendChild(equipSlot)
		
		return div
	}
	createEquipmentSummaryOption(number){
		var equipOption = Player.prototype.summaryEquipOption(number,'View')
		var div = document.createElement('div');
		div.className = "EquipmentOption"
		var optionName = Object.getOwnPropertyNames(equipOption)
		var length = optionName.length
		for(var i = 0 ; i < length ; i ++){
			var innerDiv = document.createElement('div');
			innerDiv.className = optionName[i]
			var name = document.createElement('p');
			name.className = 'OptionName'
			name.innerText = optionName[i]
			var value = document.createElement('p');
			value.className = "OptionValue"
			switch(optionName[i]){
				case 'Atk' : 
				case 'Matk' :
					value.innerText = equipOption[optionName[i]]
					break;
				case 'Def' :
				case 'Mdef' :
					value.innerText = equipOption[optionName[i]].Per + ' + ' + equipOption[optionName[i]].Num
					break;
													}
			innerDiv.appendChild(name)
			innerDiv.appendChild(value)
			div.appendChild(innerDiv)
		}
		return div
	}
	createEquipmentSlot(type,performer){
		if(!performer){
			var equip = this.performer.equip
		}
		else{
			var equip = performer.equip
		}
		var div = document.createElement('div');
		div.className = 'ItemEquipSlot'
		var radio = document.createElement("input")
		radio.setAttribute("type", "radio")
		radio.setAttribute("name", "equipment")
		radio.id = type
		radio.value = type
		radio.className = "ItemCaseRadio"
		var label = document.createElement("label")
		label.setAttribute("for", type)
		label.className = "ItemCaseText"
		label.innerText= type
		var infoText = document.createElement('div');
		if(Object.getOwnPropertyNames(equip[type]).length != 0){
			if(!performer){
			infoText = this.createItemOptionText(type)
			}
			else{
				infoText = this.createItemOptionText(type,equip[type])
			}
		}
		div.appendChild(radio)
		div.appendChild(label)	
		div.appendChild(infoText)
		return div
	}
	createEquipmentInventory(){
		if(!(!document.getElementById('InventoryTittle'))){
			var index = document.getElementById('InventoryTittle').value + 0
		}
		else{
			var index = 0
		}
		var div = document.createElement('div')		
		div.className = 'InventoryView'
		div.id = 'InventoryView'
		var tittle = document.createElement('p');
		tittle.className = "InventoryTittle"
		tittle.id = "InventoryTittle"
		tittle.innerText = 'Equipment capable'
		div.appendChild(tittle)
		var inventory = inventoryData
		var inventoryName = Object.getOwnPropertyNames(inventory)
		inventoryName.push('All')
		var select = document.createElement('select');
		select.id = 'InventorySelecter'
		select.className = "InventoryType"
		for(var i = 0, inventoryLength = inventoryName.length; i < inventoryLength ; i ++){
			var option = document.createElement('option')
			option.value = inventoryName[i]
			option.innerText = inventoryName[i]
			select.appendChild(option)
			if( i === index){
				option.setAttribute("selected", "selected")
			}
		}
		select.appendChild(option)
		div.appendChild(select)
		var itemData = this.createItemData(select.value)
		div.appendChild(itemData)
		var button = this.createEquipButton()
		div.appendChild(button)
		return div
	}
	createEquipButton(number){
		if(!number){
			var id = this.id
		}
		else{
			var id = number
		}
		var button = document.createElement('button');
		button.className = 'ItemButton EquipButton Button'
		button.innerText = 'Equip'
		button.value = id
		return button
	}
	createItemData(type){
		if(!type){
			type = document.getElementById('InventorySelecter').value
		}
		var div = document.createElement('div')
		div.className = "Inventory"
		div.id = 'Inventory'
		if(type === 'All'){
			var inventory = inventoryData
			var inventoryName = Object.getOwnPropertyNames(inventory)
			for(var i = 0, inventoryLength = inventoryName.length; i < inventoryLength; i++){
				var nowInventory = inventoryData[inventoryName[i]]
				var nowInventoryName = Object.getOwnPropertyNames(nowInventory).sort()
				for(var j = 0, nowInventoryLength = nowInventoryName.length; j < nowInventoryLength; j++){
					var itemDiv = document.createElement('div')
					itemDiv.className = "ItemData"
					var radio = document.createElement("input")
					radio.setAttribute("type", "radio")
					radio.setAttribute("name", "inventory")
					radio.id = nowInventoryName[j]
					radio.value = nowInventoryName[j]
					radio.className = "ItemEquipRadio"
					radio.addEventListener('click',
																 function(){
						document.getElementById('InventoryView').value = this.id
					})
					var label = document.createElement("label")
					label.setAttribute("for", nowInventoryName[j])
					label.className = "ItemLabel"
					var selecter = document.createElement("div")
					selecter.className = "ItemSelecter"
					var inputLabel = this.createItemOptionText(0,nowInventory[nowInventoryName[j]],'Inventory')
					label.appendChild(selecter)
					label.appendChild(inputLabel)
					itemDiv.appendChild(radio)
					itemDiv.appendChild(label)
					div.appendChild(itemDiv)
				}
			}
		}
		else{
		var inventory = inventoryData[type]
		var inventoryName = Object.getOwnPropertyNames(inventory).sort()
		for(var i = 0, inventoryLength = inventoryName.length; i < inventoryLength; i++){
			var itemDiv = document.createElement('div')
			itemDiv.className = "ItemData"
			var radio = document.createElement("input")
			radio.setAttribute("type", "radio")
			radio.setAttribute("name", "inventory")
			radio.id = inventoryName[i]
			radio.value = inventoryName[i]
			radio.className = "ItemEquipRadio"
			radio.addEventListener('click',
													function(){
			document.getElementById('InventoryView').value = this.id
			})
			var label = document.createElement("label")
			label.setAttribute("for", inventoryName[i])
			label.className = "ItemLabel"
			var selecter = document.createElement("div")
			selecter.className = "ItemSelecter"
			var inputLabel = this.createItemOptionText(0,inventory[inventoryName[i]],'Inventory')
			label.appendChild(selecter)
			label.appendChild(inputLabel)
			itemDiv.appendChild(radio)
			itemDiv.appendChild(label)
			div.appendChild(itemDiv)
		}
		}
		return div
	}
	createItemOptionText(type,item,createType){
		if(!item){
		item = this.performer.equip[type]
		}
		var itemElementName = Object.getOwnPropertyNames(item)
		var optionName = ['atkPhy','atkMag','defPhy','defMag']
		var optionNameLength = optionName.length;
		var div = document.createElement('div')
		div.className = 'ItemInfoText'

		if(!item.refair){
		var innerItemName = item.name + '(' + item.type + ')';
		}
		else{
		var innerItemName = '+' + item.refair + ' ' + item.name + '(' + item.type + ')';
		}
		var nameP = new Text(innerItemName , 'ItemName').p
		var slash = document.createElement('p');
		slash.innerText = ' / '
		div.appendChild(nameP)
		if(createType =='Inventory'){
			var countP = new Text( 'x' + item.number , 'ItemCount').p
			div.appendChild(countP)
		}
		div.appendChild(slash)
		var checkCreate = {defPhy : 0, defMag : 0}
		var itemOption = Object.getOwnPropertyNames(item.option)
		for( var i  = 0, itemOptionLength = itemOption.length ; i < itemOptionLength; i ++){
			if(itemOption[i].length != 6){
				var checkName = itemOption[i].slice(0,6)
			}
			else{
				var checkName = itemOption[i]
			}
			var index = optionName.indexOf(checkName) 
			if(index != -1){
				var slash = document.createElement('p');
				slash.innerText = ' / '
				var textType = optionName[index]
				if(index < 2){
					var innerText = item.option[optionName[index]]
				}
				else{
						var defPer = item.option[optionName[index] + 'Per']
						if(!defPer){
							var innerText = '0 + '  
						}
						else{
							var innerText = defPer + ' + '
						}
						var defNum = item.option[optionName[index] + 'Num']
						if(!defNum){
							innerText += '0'  
						}
						else{
							innerText += defNum
						}
						checkCreate[optionName[index]] += 1
					
				}
				if(!checkCreate[optionName[index]] || checkCreate[optionName[index]] == 1){
					var optionP = new Text(innerText , textType).p
				div.appendChild(optionP)
				div.appendChild(slash)
				}
			}			
		}
		if(itemElementName.indexOf('exp') != -1){
			var optionP = new Text(item.exp , 'ItemOption').p
			div.appendChild(optionP)
		}
		return div
	}
	createViewState(number,performerNumber,type){
		if(!performerNumber && performerNumber != 0){
			var performer = this.performer
		}
		else{
			var performer = playerTeam.character[performerNumber]
		}
		if(!type){
		var originState = performer.origin.state[nameState[number]]
		var baseState = performer.baseState[nameState[number]]
		}
		else{
			var baseState = parseInt(document.getElementById('StateOption' + nameState[number]).getAttribute("value"))
			var originState = new State(playerTeam.character[performerNumber],baseState,0,0,number).state
		}
		if(!performer.add || !performer.add.state || !performer.add.state[nameState[number]]){
			var addState = 0
		}
		else{			
			var addState = performer.add.state[nameState[number]]
		}
		var div = document.createElement('div');
		div.id = 'StateOption' + nameState[number]
		div.value = originState
		div.className = 'StateOptionText'
		var stateValue = this.returnStateText(originState, addState);
		var stateGrade = document.createElement('div');
		stateGrade.innerText = stateValue[0]
		if(addState){
			stateGrade.innerText += ' + ' + addState
		}
		stateGrade.style.textTransform =  'none'
			div.appendChild(stateGrade)
			var max = document.createElement('div');
			max.className = 'Max'
			var stateNumber = document.createElement('div');
		stateNumber.className='EXP'
		stateNumber.style.width = stateValue[1] + '%'
		stateNumber.title = stateValue[1] + '%'
		max.appendChild(stateNumber)
		div.appendChild(max)
		div.setAttribute("value", baseState)
		div.setAttribute("addValue", 0)
		return div
	}
	returnStateText(number,addNumber,exp){ 
		var grade = ['K' , 'J' , 'I' , 'H'  , 'G' , 'F' , 'E' , 'D' , 'C' , 'B' , 'A' , 'Ex'] 
		var secondGarde = ['k' , 'j' , 'i' , 'h'  , 'g' , 'f' , 'e' , 'd' , 'c' , 'b' , 'a' ]
		var first = Math.floor((number + addNumber) / 1331)
		var secound = Math.floor(((number + addNumber) - first * 1331) / 121)
		var third = (number + addNumber) - first * 1331 - secound * 121;
		if(first > 10){
			var over = Math.floor((number + addNumber) / 14641) - 1;
			var head = (over == 0) ? 'Ex' : 'Ex_' + over
			var numbering = Math.floor(((number + addNumber) % 14641) / 14641 * 1000) / 10
			}
		else{
			var head = grade[first] + secondGarde[secound]
			var numbering =  Math.floor(third / 121 * 1000)/10 // exp / StateExp +  
			}
		return [head,numbering]
	}
}
class addEventListner{
	constructor(type){
		
	}
	addEvent(){
		this.addEventItemEquipRadio()
		this.addEventItemCaseRadio()
		this.addEventRemoveButton()
		this.addEventEquipButton()
		this.addEventInventorySelecter()
		this.addEventStateUp()
		this.addEventStateResetButton()
		this.addEventStateApplyButton()
		this.addEventTabs()
	}
	addEventInventorySelecter(){
		var selecter = document.getElementById('InventorySelecter')
		selecter.addEventListener('change',
														 function(){
			var selecter = this
			var parent = this.parentNode.children[2]
			var inventory =  CharacterDesk.prototype.createItemData()
			parent.innerHTML  = inventory.innerHTML
			addEventListner.prototype.addEventItemEquipRadio()
			document.getElementById('InventoryTittle').value = selecter.selectedIndex
			})
	}
	addEventStateApplyButton(){
		var applyButton = document.getElementsByClassName('ApplyButton')[0]
		applyButton.addEventListener('click',function(){
			var failCheck = 0
			var performerNumber = document.getElementById('CharacterDesk').value
			var performer = playerTeam.character[performerNumber]
			var bonusValue = performer.bonusState
			var state = performer.baseState
			var bonusSummary = 0
			for(var i = 0 ; i < 10 ; i++){
				var checkType = document.getElementById('StateOption' + nameState[i])
				var upValue = parseInt(checkType.getAttribute("value"))
				var addValue = parseInt(checkType.getAttribute("addValue"))
				if(state[nameState[i]] !=  upValue - addValue){
					failCheck += 1;
				}
				else if(addValue < 0){
					failCheck += 1;
				}
				else if(state[nameState[i]] > upValue){
					failCheck += 1;
				}
				bonusSummary  += addValue
			}
			if(bonusSummary < 0 || bonusSummary > bonusValue){
				failCheck += 1;
			}
			if(failCheck === 0){
				performer.bonusState -= bonusSummary
				for(var i = 0 ; i < 10 ; i++){
					var checkType = document.getElementById('StateOption' + nameState[i])
					var addValue = parseInt(checkType.getAttribute("addValue"))
					if(addValue != 0){
					performer.baseState[nameState[i]]  = state[nameState[i]] = parseInt(checkType.getAttribute("value"))						
					performer.stateExp[nameState[i]] = Player.prototype.calculrateStateExp(performerNumber,nameState[i])
					}
				}
				new State(playerTeam.character[performerNumber])
				CharacterDesk.prototype.refreshStateView()	
				addEventListner.prototype.addEvent()
			}
		})
	}
	addEventStateResetButton(){
		var resetButton = document.getElementsByClassName('ResetButton')[0]
		resetButton.addEventListener('click',function(){
			CharacterDesk.prototype.refreshStateView()	
			addEventListner.prototype.addEvent()
		})
	}
	addEventEquipButton(){
		var equipButton = document.getElementsByClassName('EquipButton')[0]
		equipButton.addEventListener('click',
														 function(){
			var nowSelect = parseInt(document.getElementById('InventorySelecter').selectedIndex)
			var value = document.getElementById('CharacterDesk').value
				var target = document.getElementById('InventoryView').value
				new EquipItem(value,target)
				var parent =  document.getElementById('InventoryView')
				var div = CharacterDesk.prototype.createEquipmentInventory()
				parent.innerHTML = div.innerHTML
			document.getElementById('InventorySelecter').selectedIndex = document.getElementById('InventoryTittle').value = nowSelect 
				var divE = CharacterDesk.prototype.createViewEquipment(value)
				var parentE = document.getElementById('EquipSelect')
				parentE.innerHTML = divE.innerHTML
				CharacterDesk.prototype.refreshStateView()
			addEventListner.prototype.addEvent()
			})
	}
	addEventRemoveButton(){
		var itemButton = document.getElementsByClassName('RemoveButton')[0]
		itemButton.addEventListener('click',
														 function(){
			var nowSelect = parseInt(document.getElementById('InventorySelecter').selectedIndex)
			var value = document.getElementById('CharacterDesk').value
				var performer = playerTeam.character[this.value]
				var target = document.getElementById('EquipSelect').value
				new EquipItem(value,'null',target)
				var parent = document.getElementById('EquipSelect')
				var div = CharacterDesk.prototype.createViewEquipment(value)
				parent.innerHTML = div.innerHTML
			document.getElementById('InventorySelecter').selectedIndex = document.getElementById('InventoryTittle').value = nowSelect 
			var parent =  document.getElementById('InventoryView')
				var div = CharacterDesk.prototype.createEquipmentInventory()
				parent.innerHTML = div.innerHTML

			CharacterDesk.prototype.refreshStateView()
			addEventListner.prototype.addEvent()
			})
	}
	addEventItemCaseRadio(){
		var itemCase = document.getElementsByClassName('ItemCaseRadio')
		var length = itemCase.length;
		for(var i = 0 ; i< length ; i++){
			itemCase[i].addEventListener('click',
													function(){
			document.getElementById('EquipSelect').value = this.value
		})
		}
	}
	addEventItemEquipRadio(){
		var radio = document.getElementsByClassName('ItemEquipRadio')
		var length = radio.length;
		for(var i = 0 ; i < length; i++){
			radio[i].addEventListener('click',
													function(){
			document.getElementById('InventoryView').value = this.id
			})
		}
	}
	addEventStateUp(){
		for(var i = 0 ; i < 10 ; i ++){
			var setEventDiv = document.getElementById('StateOption' + nameState[i])
			setEventDiv.addEventListener('click',
																	 function(){
				var bonus = document.getElementById('BonusState')
				var bonusValue = parseInt(bonus.innerText)
				var performerNumber = document.getElementById('CharacterDesk').value
				var bonusValueMain = playerTeam.character[performerNumber].bonusState
				if(bonusValue > 0 && bonusValueMain > 0){
					bonusValue -= 1
					bonus.innerText = bonusValue;
					var set = this
					set.setAttribute("addValue",parseInt(set.getAttribute("addValue")) + 1)
					set.setAttribute("value",parseInt(set.getAttribute("value")) + 1)
					var number = nameState.indexOf(set.id.slice(11))
					var newSet = CharacterDesk.prototype.createViewState(number,performerNumber,'change')
					set.innerHTML = newSet.innerHTML
				}
			}
																	)
		}
	}
	addEventTabs(){
		var menu = document.getElementsByClassName('MenuTabs')
		var menuCount = menu.length
		for( var j = 0 ; j < menuCount; j++){
			var tab = menu[j]
			var children = tab.children
			var length = children.length
			for(var i = 0 ; i < length ; i ++){
				children[i].addEventListener('click',
																		 function(){
					var selectTab = this
					var parent = this.parentNode
					var activeTab = parent.getElementsByClassName('activeTab')[0]
					activeTab.className = ''
					var aConectTab = activeTab.dataset.conecttab
					if(aConectTab === 'InventoryView'){
						
					}
					document.getElementById(aConectTab).style.display = 'none'
					selectTab.className = 'activeTab'
					var sConectTab = selectTab.dataset.conecttab
					document.getElementById(sConectTab).style.display = 'block'
					if(sConectTab === 'InventoryView'){
						
					}
				}
																		)
		}
		}
	}
}
class CharacterHire{
	constructor(){
		var name = document.getElementById('HireName').value
		if(!name){
			document.getElementById('HireName').value = 'Input Name'
			return
		}
		var checkHire = this.hirePayment();
		if(checkHire != 0){
			var createCharacter = new Player(name)
			
		playerTeam.character[createCharacter.code] = createCharacter
			playerTeam.refreshTeamData('funds')
		}
		else{
			document.getElementById('HireName').value = 'Less Funds'
			document.getElementById('HireName').style.backgroundColor = '#6e0906'
			document.getElementById('HireName').addEventListener('focus',
																													 function(){
				document.getElementById('HireName').style.backgroundColor = '#10b090'
			}
																													)
		}
	}
	hirePayment(type){
		var value = 0;
		switch(type){
			case 'normal' : 
			break;
			default :
			value = 100;
			break;
		}
		if(playerTeam.funds >= value){
			playerTeam.funds -= value
			return 1
		}
		else{
			return 0
		}
	}
	hireTimeValeu(type){
		var timeValue = 0;
		switch(type){
			case 'normal' :
			timeValue = 100
		}
		return timeValue
	}
}
let playerTeam = {}
function createTeam(){
	playerTeam = new Team
	playerTeam.refreshTeamData()
}
class Team{
	constructor(){
		var name = 'a'//document.getElementById('InputTeamName').value
		if(!name || name === 'Input Name'){
			document.getElementById('InputTeamName').value = 'Input Name'
			return
		}
		this.name = name
		this.funds = Math.round(Math.random() * 1000) + 500
		this.character = {}
		document.getElementById('InterPlayer').remove()
		document.getElementById('PlayerView').style.display = 'block'
	}
	refreshTeamData(type){
		var team = playerTeam
		switch(type){
			case 'name' :
				document.getElementById('TeamName').innerText = team.name
				break;
			case 'funds' :				
				document.getElementById('TeamFunds').innerText = 'Funds : ' + team.funds
				break;
			default : 
				document.getElementById('TeamName').innerText = team.name
				document.getElementById('TeamFunds').innerText = 'Funds : '  + team.funds
				break;
							 }
	}
}
/*let timeTable = []
class timeSet{
	constructor(){
		var length = timeTable.length
		for(var i = 0 ; i < length; i++){
			timeTable[i].value -= 1
			if(timeTable[i].value <= 0){
				
			}
		}
	}
	callClass(type){
		switch(type){
					 
					 }
	}
}
class Time{
		constructor(timeValue,type){
			this.value = timeValue
			this.type = type
		}
}*/


window.onload = function(){
	document.getElementById("AreaSelect").addEventListener('change',
																												 function(){
		var area = new Area
		area.changeLevel()
	}
																												)
	addEventListner.prototype.addEventTabs()
	document.getElementsByClassName('MenuTabs')[0].children[2].click()
	createTeam()
}
class Text{
	constructor(text,type){
		var p = document.createElement('a');
		p.innerText = text + ' '
		this.p = p
		this.checkStyle(type)
		this.setStyle()
	}
	setStyle(){
		var style = Object.getOwnPropertyNames(this.style)
		var length = style.length;
		for(var i =0 ; i < length; i++){
			this.p.style[style[i]] = this.style[style[i]]
		}
		
	}
	checkStyle(type){
		this.style = {}
		this.checkStyleDeco(type)
		this.checkStyleColor(type)
	}
	checkStyleDeco(type){
		switch(type){
			case 'Name' :
			case 'SkillName' :
				this.style.textDecoration = 'underline'
				break;
			case 'ItemCount' :
				this.style.lineHeight = 1.8;
				this.style.fontSize = '0.8em';
				break;
							 }
	}
	checkStyleColor(type){
		switch(type){
			case 'atkPhy' :
			case 'HpDamage' :
				this.style.color = 'red'
				break;
			case 'defPhy' :
			case 'HpRecovery' :
				this.style.color = 'green'
				break;
			case 'atkMag' :
			case 'MpDamage' :
				this.style.color = 'blueviolet'
				break;
			case 'MpRecovery' :
				this.style.color = 'blue'
				break;
			case 'SpDamage' :
				this.style.color = 'yellowgreen'
				break;
			case 'SpRecovery' :
				this.style.color = 'yellow'
				break;
			case 'Delay' :
				this.style.color = 'limegreen'
				break;
			case 'Death' :
				this.style.color = 'darkred'
				break;
			case 'Support' :
				this.style.color = 'slategrey'
				break;
			case 'defMag' :
				this.style.color = 'aqua';
				break;
			case 'ItemOption' :
				this.style.color = 'gray'
				break;
			case 'ItemName' :
			case 'ItemCount' :
				this.style.color = 'honeydew'
				break;
							 }
	}
}
class Log{
	constructor(array){
		var length = array.length
		var mainDiv = document.createElement('div')
		mainDiv.className ="Log"
		for( var i = 0 ; i < length ; i++){
			var type = (!array[i].type) ? '' : array[i].type
			var text = new Text(array[i].text, type).p;
			mainDiv.appendChild(text)
		}
		this.divLog = mainDiv
	}
}
class AddLog{
	constructor(textArray,type,parent){
		if(!parent){
		this.selectLogView(type)
			this.clearLogView()
		}
		else{
			this.logView = parent
		}
		//var text = this.createLogText(textArray);
		var log = new Log(textArray).divLog
		var children = this.logView.children
		if(!parent && type != 'Turn'){
		this.logView.insertBefore(log,children[0])
		}
		else{
			this.logView.appendChild(log)
		}
		this.log = log
	}
	selectLogView(type){
		switch(type){
			case 'Battle':
				this.logView = document.getElementById('BattleLogView')
				break;
			case 'Turn' :
				this.logView = document.getElementsByClassName('Log')[0]
							 }
	}
	clearLogView(type){
		if(type){
			this.selectLogView(type)
			this.logView.innerHTML = ''
		}
		else{
		 var checkValue = this.logView.children.length
		for(; checkValue > 30;){
			this.logView.children[checkValue - 1].remove()
			checkValue = this.logView.children.length
		}
		}
	}
}
function enemyKill() {
	var data = Object.getOwnPropertyNames(dataActiveCharacter)
	var length = data.length
	for(var i = 0 ; i < length ; i++){
		if(data[i].indexOf('E') != -1){
			dataActiveCharacter[data[i]].health.hp = -10;
		}
	}
}