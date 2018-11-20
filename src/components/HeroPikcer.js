import React, { Component } from 'react';
import '../css/TeamPick.css';
class HeroPicker extends Component {
    handleClickImage = (item) => {
        //this.setState({species:e.target.value});
        this.props.handleClickImage(item);
        console.log(item.name);
    };

    // onClick={this.onClick.bind(this, image.mediaId)}
  render() {
    let names = ["abaddon.png","alchemist.png","ancient_apparition.png","anti_mage.png","arc_warden.png","axe.png","bane.png","batrider.png","beastmaster.png","bloodseeker.png","bounty_hunter.png","brewmaster.png","bristleback.png","broodmother.png","centaur_warrunner.png","chaos_knight.png","chen.png","clinkz.png","clockwerk.png","crystal_maiden.png","dark_seer.png","dark_willow.png","dazzle.png","death_prophet.png","disruptor.png","doom.png","dragon_knight.png","drow_ranger.png","earth_spirit.png","earthshaker.png","elder_titan.png","ember_spirit.png","enchantress.png","enigma.png","faceless_void.png","gyrocopter.png","huskar.png","invoker.png","io.png","jakiro.png","juggernaut.png","keeper_of_the_light.png","kunkka.png","legion_commander.png","leshrac.png","lich.png","lifestealer.png","lina.png","lion.png","lone_druid.png","luna.png","lycan.png","magnus.png","medusa.png","meepo.png","mirana.png","monkey_king.png","morphling.png","naga_siren.png","natures_prophet.png","necrophos.png","night_stalker.png","nyx_assassin.png","ogre_magi.png","omniknight.png","oracle.png","outworld_devourer.png","pangolier.png","phantom_assassin.png","phantom_lancer.png","phoenix.png","puck.png","pudge.png","pugna.png","queen_of_pain.png","razor.png","riki.png","rubick.png","sand_king.png","shadow_demon.png","shadow_fiend.png","shadow_shaman.png","silencer.png","skywrath_mage.png","slardar.png","slark.png","sniper.png","spectre.png","spirit_breaker.png","storm_spirit.png","sven.png","techies.png","templar_assassin.png","terrorblade.png","tidehunter.png","timbersaw.png","tinker.png","tiny.png","treant_protector.png","troll_warlord.png","tusk.png","underlord.png","undying.png","ursa.png","vengeful_spirit.png","venomancer.png","viper.png","visage.png","warlock.png","weaver.png","windranger.png","winter_wyvern.png","witch_doctor.png","wraith_king.png","zeus.png"].map( (name, index) => {
        return (
                <img key={index} onClick={this.handleClickImage.bind(this, {name})} className="img-responsive" alt="" src={require(`../images/heros/${name}`)} />
        )
    } );
    return (
        <div className="HeroPicker">
            <footer className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h4>Please Select Your Heroes</h4>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    { names }

                </div>
            </footer>
        </div>
    );
  }
}

export default HeroPicker;