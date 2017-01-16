class BattleSpec{
	constructor(performer,type){
		this.performer = performer
		this.addSpec = {}
		var stack = ['equip','passive']
		if(!type){
			this.refreshBattleBaseSpec()
			this.checkEquipOption()
			this.summaryAddSpec()
		}
		else{
			
		}
	}
	refreshBattleBaseSpec(type){
		if(!type || type === 'all'){
			var origin = this.performer.origin
			var originName = Object.getOwnPropertyNames(origin)
			var originLength = originName.length
			for(var i = 0 ; i < originLength; i++){
				var refresh = origin[originName[i]]
				var refreshName = Object.getOwnPropertyNames(refresh)
				var refreshLength = refreshName.length
				for(var j = 0 ; j < refreshLength; j++){
					this.performer.battle[originName[i]][refreshName[j]] = refresh[refreshName[j]] * 1
				}
			}
		}
		else{
			var origin = this.performer.origin[type]
			var originName = Object.getOwnPropertyNames(origin)
			var originLength = originName.length
			for(var i = 0 ; i < originLength; i++){
				this.performer.battle[type][originName[i]] = origin[originName[j]] * 1
			}
		}
	}
	summaryAddSpec(){
		var addSpec = this.addSpec
		var addSpecName = Object.getOwnPropertyNames(addSpec)
		var addSpecLength = addSpecName.length
		for( var i = 0 ; i < addSpecLength ; i ++){
			var specValue = addSpec[addSpecName[i]]
			var specValueName = Object.getOwnPropertyNames(specValue)
			var specValueLength = specValueName.length
			for( var j = 0 ; j < specValueLength ; j++){
				this.performer.battle[addSpecName[i]][specValueName[j]] += specValue[specValueName[j]]
			}
		}
	}
	checkEquipOption(){
		var equip = this.performer.equip
		var equipSlot = Object.getOwnPropertyNames(equip)
		var equipLength = equipSlot.length
		for( var i = 0 ; i < equipLength ; i++){
			var item = equip[equipSlot[i]].spec
			if(item){
				var itemOption = Object.getOwnPropertyNames(item)
				var itemOptionLength = itemOption.length
				if(itemOptionLength != 0){
					for( var j = 0 ; j < itemOptionLength ; j++){
						this[itemOption[j] + 'CalculrateSpec'](item[itemOption[j]])
					}
				}
			}
		}
	}
	healthCalculrateSpec(data){
		if(!this.addSpec.health){
			this.addSpec.health = {}
		}
		var health = this.addSpec.health
		var name = Object.getOwnPropertyNames(data)
		var length = name.length
		for( var i = 0 ; i < length ; i ++){
			var target = health[name[i]].slice(0,2)
			if(!this.addSpec.health[target]){
				this.addSpec.health[target] = 0
			}
			if(health[name[i]].indexOf('Percent') === -1){
				var addValue = health[name[i]]
			}
			else{
				var addValue = Math.round(this.performer.origin.health[target] * (health[name[i]] / 100))			
			}
			this.addSpec.health[target] += addValue
		}
	}
	stateCalculrateSpec(data){
		if(!this.addSpec.state){
			this.addSpec.state = {}
		}
		var state = this.addSpec.state
		var name = Object.getOwnPropertyNames(data)
		var length = name.length
		for( var i = 0 ; i < length ; i ++){
			if(!this.addSpec.state[name[i]]){
				this.addSpec.state[name[i]] = 0
			}
			this.addSpec.state[name[i]] += data[name[i]]
		}
	}
	optionCalculrateSpec(data){
		if(!this.addSpec.option){
			this.addSpec.option = {}
		}
		var option = this.addSpec.option
		var name = Object.getOwnPropertyNames(data)
		var length = name.length
		for( var i = 0 ; i < length ; i ++){
			if(!this.addSpec.option[name[i]]){
				this.addSpec.option[name[i]] = 0
			}
			this.addSpec.option[name[i]] += data[name[i]]
		}
	}
	summaryEquipSpecView(number){
		var performer = playerTeam.character[number]
		var equip = performer.equip
		var equipSlot = Object.getOwnPropertyNames(equip)
		var equipLength = equipSlot.length
		var itemOption ={ Atk : 0, Matk : 0, Def : {Per : 0, Num : 0}, Mdef : {Per : 0, Num : 0}}
		var targetNameOption = ['atkPhy','atkMag','defPhyPer','defPhyNum','defMagPer','defMagNum']
		var targetNameOptionLength = targetNameOption.length
		for( var i = 0 ; i < equipLength; i++ ){
			var nowItem = equip[equipSlot[i]].spec
			if(nowItem){
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
}
