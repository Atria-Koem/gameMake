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
