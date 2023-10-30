import {FightActionFunc} from "../../../../../data/FightAction";
import {attackInfo, statsInfo} from "../../FightActionController";
import {Fighter} from "../../../fighter/Fighter";
import {simpleDamageFightAction} from "../../templates/SimpleDamageFightActionTemplate";

const use: FightActionFunc = (sender, receiver) => simpleDamageFightAction(
	{
		sender,
		receiver
	},
	{
		critical: 10,
		failure: 10
	},
	{
		attackInfo: getAttackInfo(),
		statsInfo: getStatsInfo(sender, receiver)
	}
);

function getAttackInfo(): attackInfo {
	return {
		minDamage: 120,
		averageDamage: 150,
		maxDamage: 160
	};
}

function getStatsInfo(sender: Fighter, receiver: Fighter): statsInfo {
	return {
		attackerStats: [
			sender.getAttack(),
			sender.getSpeed()
		],
		defenderStats: [
			receiver.getDefense(),
			receiver.getSpeed()
		],
		statsEffect: [
			0.8,
			0.2
		]
	};
}

export default use;