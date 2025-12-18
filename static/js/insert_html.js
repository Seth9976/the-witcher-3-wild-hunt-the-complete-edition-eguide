function insert_toc(obj_id, path){
  var inner_html = '<section class=\"sections\">\
	<ul>\
		<li class=\"section\">\
			<a href=\"$roothtml/how-to-use-this-guide.html\" data-target=\"how-to-use-this-guide\">\
				<i class=\"icon-plus\"></i>\
				<span>How To Use This Guide</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/atlas.html\" data-target=\"atlas\">\
				<i class=\"icon-map-marker\"></i>\
				<span>Atlas</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/introduction-and-characters.html\" data-target=\"introduction-and-characters\">\
				<i class=\"icon-plus\"></i>\
				<span>Introduction and Characters</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/videos.html\" data-target=\"videos\">\
				<i class=\"icon-facetime-video\"></i>\
				<span>Videos</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/training.html\" data-target=\"training\">\
				<i class=\"icon-plus\"></i>\
				<span>Training</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/gwent.html\" data-target=\"gwent\">\
				<i class=\"icon-plus\"></i>\
				<span>Gwent</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/quest-walkthrough-prologue.html\" data-target=\"quest-walkthrough-prologue\">\
				<i class=\"icon-plus\"></i>\
				<span>Quest Walkthrough: Prologue</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/quest-walkthrough-act-i-velen.html\" data-target=\"quest-walkthrough-act-i-velen\">\
				<i class=\"icon-plus\"></i>\
				<span>Quest Walkthrough: Act I (Velen)</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/quest-walkthrough-act-i-novigrad.html\" data-target=\"quest-walkthrough-act-i-novigrad\">\
				<i class=\"icon-plus\"></i>\
				<span>Quest Walkthrough: Act I (Novigrad)</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/quest-walkthrough-act-i-skellige.html\" data-target=\"quest-walkthrough-act-i-skellige\">\
				<i class=\"icon-plus\"></i>\
				<span>Quest Walkthrough: Act I (Skellige)</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/quest-walkthrough-act-ii.html\" data-target=\"quest-walkthrough-act-ii\">\
				<i class=\"icon-plus\"></i>\
				<span>Quest Walkthrough: Act II</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/quest-walkthrough-act-iii.html\" data-target=\"quest-walkthrough-act-iii\">\
				<i class=\"icon-plus\"></i>\
				<span>Quest Walkthrough: Act III</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/epilogue-and-endings.html\" data-target=\"epilogue-and-endings\">\
				<i class=\"icon-plus\"></i>\
				<span>Epilogue And Endings</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone.html\" data-target=\"episode-1-main-quests-hearts-of-stone\">\
				<i class=\"icon-plus\"></i>\
				<span>Episode 1: Main Quests: Hearts Of Stone</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/episode-2-main-quests-blood-and-wine.html\" data-target=\"episode-2-main-quests-blood-and-wine\">\
				<i class=\"icon-plus\"></i>\
				<span>Episode 2: Main Quests: Blood And Wine</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/secondary-quests.html\" data-target=\"secondary-quests\">\
				<i class=\"icon-plus\"></i>\
				<span>Secondary Quests</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/gwent-quests.html\" data-target=\"gwent-quests\">\
				<i class=\"icon-plus\"></i>\
				<span>Gwent Quests</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/the-heroes-pursuits.html\" data-target=\"the-heroes-pursuits\">\
				<i class=\"icon-plus\"></i>\
				<span>The Heroes’ Pursuits</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/witcher-contracts.html\" data-target=\"witcher-contracts\">\
				<i class=\"icon-plus\"></i>\
				<span>Witcher Contracts</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/treasure-hunts.html\" data-target=\"treasure-hunts\">\
				<i class=\"icon-plus\"></i>\
				<span>Treasure Hunts</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/scavenger-hunts.html\" data-target=\"scavenger-hunts\">\
				<i class=\"icon-plus\"></i>\
				<span>Scavenger Hunts</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/appendices-and-compendiums.html\" data-target=\"appendices-and-compendiums\">\
				<i class=\"icon-plus\"></i>\
				<span>Appendices and Compendiums</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/inventory-data.html\" data-target=\"inventory-data\">\
				<i class=\"icon-plus\"></i>\
				<span>Inventory Data</span>\
			</a>\
		</li>\
		<li class=\"section\">\
			<a href=\"$roothtml/credits.html\" data-target=\"credits\">\
				<i class=\"icon-plus\"></i>\
				<span>Credits</span>\
			</a>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"how-to-use-this-guide\">\
	<h2>How To Use This Guide</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/how-to-use-this-guide/quest-list-table-alphabetical.html\">\
				Quest List Table (Alphabetical)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/how-to-use-this-guide/additional-content.html\">\
				Additional Content\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"atlas\">\
	<h2>Atlas</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/using-the-atlas.html\">\
				Using the Atlas\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/map-legend.html\">\
				Map Legend\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/white-orchard.html\" data-link-type=\"map\" target=\"_blank\">\
				White Orchard\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/royal-palace-vizima.html\" data-link-type=\"map\" target=\"_blank\">\
				Royal Palace in Vizima\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/velen-no-mans-land.html\" data-link-type=\"map\" target=\"_blank\">\
				Velen (No Man&#39;s Land)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/novigrad.html\" data-link-type=\"map\" target=\"_blank\">\
				Novigrad\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/skellige-isles.html\" data-link-type=\"map\" target=\"_blank\">\
				Skellige Isles\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/isle-mists.html\" data-link-type=\"map\" target=\"_blank\">\
				Isle of Mists\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/dark-valley.html\" data-link-type=\"map\" target=\"_blank\">\
				Dark Valley\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/tedd-deireadh.html\" data-link-type=\"map\" target=\"_blank\">\
				Tedd Deireadh\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/kaer-morhen.html\" data-link-type=\"map\" target=\"_blank\">\
				Kaer Morhen\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/duchy-toussaint-blood-and-wine.html\" data-link-type=\"map\" target=\"_blank\">\
				The Duchy of Toussaint (Blood and Wine)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/atlas/fablesphere-map-blood-and-wine.html\" data-link-type=\"map\" target=\"_blank\">\
				The Fablesphere (Blood and Wine)\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"introduction-and-characters\">\
	<h2>Introduction and Characters</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/introduction.html\">\
				Introduction\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-witchers-of-kaer-morhen.html\">\
				The Witchers Of Kaer Morhen\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/sorceresses-of-the-lodge.html\">\
				Sorceresses Of The Lodge\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/friends-of-the-witcher.html\">\
				Friends Of The Witcher\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-nilfgaardians.html\">\
				The Nilfgaardians\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-redanians.html\">\
				The Redanians\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-zealots-of-novigrad.html\">\
				The Zealots Of Novigrad\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-big-four-of-novigrad.html\">\
				The Big Four of Novigrad\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-temerian-two.html\">\
				The Temerian Two\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-downtrodden-and-deviant.html\">\
				The Downtrodden And Deviant\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-oppressed-and-the-peasantry.html\">\
				The Oppressed, And The Peasantry\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-islanders-of-skellige.html\">\
				The Islanders Of Skellige\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/leaders-of-the-wild-hunt.html\">\
				Leaders Of The Wild Hunt\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-borsodi-brothers-hos-dlc.html\">\
				The Borsodi Brothers (Hearts of Stone)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/a-quartet-of-criminals-hos-dlc.html\">\
				A Quartet Of Criminals (Hearts of Stone)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-von-everec-family-hos-dlc.html\">\
				The Von Everec Family (Hearts of Stone)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-warm-and-cold-hearted-hos-dlc.html\">\
				The Warm- And Cold-Hearted (Hearts of Stone)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/the-lords-and-ladies-of-beauclair-baw-dlc.html\">\
				The Lords And Ladies Of Beauclair (Blood and Wine)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/introduction-and-characters/allies-and-beasts-of-beauclair-baw-dlc.html\">\
				Allies And Beasts Of Beauclair (Blood and Wine)\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"videos\">\
	<h2>Videos</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/videos/witcher-archetypes.html\">\
				Witcher Archetypes\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Treasure Hunts\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/videos/treasure-hunts/white-orchard.html\" class=\"drill-down-toc\">\
		White Orchard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/videos/treasure-hunts/novigrad.html\" class=\"drill-down-toc\">\
		Novigrad\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/videos/treasure-hunts/velen.html\" class=\"drill-down-toc\">\
		Velen\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/videos/treasure-hunts/skellige.html\" class=\"drill-down-toc\">\
		Skellige\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Scavenger Hunts\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/videos/scavenger-hunts/cat-school-gear.html\" class=\"drill-down-toc\">\
		Cat School Gear\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/videos/scavenger-hunts/viper-school-gear.html\" class=\"drill-down-toc\">\
		Viper School Gear\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/videos/scavenger-hunts/griffin-school-gear.html\" class=\"drill-down-toc\">\
		Griffin School Gear\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/videos/scavenger-hunts/bear-school-gear.html\" class=\"drill-down-toc\">\
		Bear School Gear\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"training\">\
	<h2>Training</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/main-menu.html\">\
				Main Menu\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/difficulty-settings.html\">\
				Difficulty Settings\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/in-game-hud.html\">\
				In-Game HUD\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/controls.html\">\
				Controls\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/movement.html\">\
				Movement\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/reactions-and-interactions.html\">\
				Reactions And Interactions\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/mapping-and-points-of-interest.html\">\
				Mapping And Points Of Interest\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/items-and-equipment.html\">\
				Items And Equipment\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/potions-bombs-and-oils.html\">\
				Potions, Bombs, And Oils\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/basic-alchemy.html\">\
				Basic Alchemy\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/alchemic-creations.html\">\
				Alchemic Creations\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/armorers-and-blacksmiths.html\">\
				Armorers And Blacksmiths\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/upgrades-glyphs-and-runestones.html\">\
				Upgrades (Glyphs And Runestones)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/the-ofieri-runewright.html\">\
				The Ofieri Runewright\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/training/shops-merchants-and-economy.html\">\
				Shops, Merchants, and Economy\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Combat\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/training/combat/overview.html\" class=\"drill-down-toc\">\
		Overview\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/combat/looking-around-and-looking-out.html\" class=\"drill-down-toc\">\
		Looking Around And Looking Out\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/combat/melee-combat-swordplay-and-fists.html\" class=\"drill-down-toc\">\
		Melee Combat (Swordplay And Fists)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/combat/signs.html\" class=\"drill-down-toc\">\
		Signs\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/combat/general-advice-for-combat.html\" class=\"drill-down-toc\">\
		General Advice For Combat\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Character Abilities And Mutations\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/training/character-abilities-and-mutations/character-development.html\" class=\"drill-down-toc\">\
		Character Development\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Ability Tree Strategies\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/training/ability-tree-strategies/combat-ability-branch.html\" class=\"drill-down-toc\">\
		Combat Ability Branch\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/ability-tree-strategies/signs-ability-branch.html\" class=\"drill-down-toc\">\
		Signs Ability Branch\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/ability-tree-strategies/alchemy-ability-branch.html\" class=\"drill-down-toc\">\
		Alchemy Ability Branch\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/ability-tree-strategies/general-ability-branch.html\" class=\"drill-down-toc\">\
		General Ability Branch\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/ability-tree-strategies/mutagen-branch.html\" class=\"drill-down-toc\">\
		Mutagen Branch\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Witcher Archetypes\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/overview.html\" class=\"drill-down-toc\">\
		Overview\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/creating-your-witcher.html\" class=\"drill-down-toc\">\
		Creating Your Witcher\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/combat-focused-archetypes.html\" class=\"drill-down-toc\">\
		Combat-focused Archetypes\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/combat-focused-archetypes/archetype-1-the-man-of-steel-and-silver.html\" class=\"drill-down-toc\">\
		Archetype 1: The Man Of Steel And Silver\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/combat-focused-archetypes/archetype-2-adrenaline-rush.html\" class=\"drill-down-toc\">\
		Archetype 2: Adrenaline Rush\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/combat-focused-archetypes/archetype-3-master-of-the-blade-and-bolt.html\" class=\"drill-down-toc\">\
		Archetype 3: Master Of The Blade And Bolt\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/signs-focused-archetypes.html\" class=\"drill-down-toc\">\
		Signs-focused Archetypes\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/signs-focused-archetypes/archetype-4the-signing-survivalist.html\" class=\"drill-down-toc\">\
		Archetype 4:The Signing Survivalist\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/signs-focused-archetypes/archetype-5-the-warlock-of-kaer-top-mountain.html\" class=\"drill-down-toc\">\
		Archetype 5: The Warlock Of Kaer-Top Mountain\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/signs-focused-archetypes/archetype-6-the-incendiary-agitator.html\" class=\"drill-down-toc\">\
		Archetype 6: The Incendiary Agitator\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/alchemy-focused-archetypes.html\" class=\"drill-down-toc\">\
		Alchemy-focused Archetypes\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/alchemy-focused-archetypes/archetype-7-the-bombardier-of-blaviken.html\" class=\"drill-down-toc\">\
		Archetype 7: The Bombardier Of Blaviken\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/alchemy-focused-archetypes/archetype-8-the-alchemist.html\" class=\"drill-down-toc\">\
		Archetype 8: The Alchemist\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/hybrid-archetypes.html\" class=\"drill-down-toc\">\
		Hybrid Archetypes\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/hybrid-archetypes/archetype-9-plague-wind.html\" class=\"drill-down-toc\">\
		Archetype 9: Plague Wind\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/hybrid-archetypes/archetype-10-bloede-beannshie.html\" class=\"drill-down-toc\">\
		Archetype 10: Bloede Beann’shie\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/hybrid-archetypes/archetype-11-the-puppet-master.html\" class=\"drill-down-toc\">\
		Archetype 11: The Puppet Master\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/training/witcher-archetypes/hybrid-archetypes/archetype-12-the-dumpling-destroyer.html\" class=\"drill-down-toc\">\
		Archetype 12: The Dumpling Destroyer\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"gwent\">\
	<h2>Gwent</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/gwent-overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/introduction-to-the-game.html\">\
				Introduction To The Game\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/who-plays-gwent.html\">\
				Who Plays Gwent?\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/basics-of-gwent.html\">\
				Basics Of Gwent\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/deck-building.html\">\
				Deck Building\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/card-unit-and-ability-types.html\">\
				Card Unit and Ability Types\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/deck-building-and-factions-advanced-tactics.html\">\
				Deck Building and Factions: Advanced Tactics\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/gwent-card-type-and-abilities-table.html\">\
				Gwent: Card Type and Abilities Table\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/a-complete-card-checklist.html\">\
				A Complete Card Checklist\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/special-cards-13.html\">\
				Special Cards (13)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/weather-cards-15.html\">\
				Weather Cards (15)\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/neutral-cards-16.html\">\
				Neutral Cards (16)\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Monsters Deck\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/monsters-deck/monsters-deck-leader-cards-5.html\" class=\"drill-down-toc\">\
		Monsters Deck: Leader Cards (5)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/monsters-deck/monsters-deck-unit-cards-41.html\" class=\"drill-down-toc\">\
		Monsters Deck: Unit Cards (41)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Nilfgaardian Empire Deck\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/nilfgaardian-empire-deck/nilfgaardian-empire-leader-cards-5.html\" class=\"drill-down-toc\">\
		Nilfgaardian Empire: Leader Cards (5)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/nilfgaardian-empire-deck/nilfgaardian-empire-unit-cards-37.html\" class=\"drill-down-toc\">\
		Nilfgaardian Empire: Unit Cards (37)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Northern Realms Deck\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/northern-realms-deck/northern-realms-leader-cards-5.html\" class=\"drill-down-toc\">\
		Northern Realms: Leader Cards (5)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/northern-realms-deck/northern-realms-unit-cards-38.html\" class=\"drill-down-toc\">\
		Northern Realms: Unit Cards (38)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Scoia’tael Deck\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/scoiatael-deck/scoiatael-leader-cards-5.html\" class=\"drill-down-toc\">\
		Scoia’tael: Leader Cards (5)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/scoiatael-deck/scoiatael-unit-cards-38.html\" class=\"drill-down-toc\">\
		Scoia’tael: Unit Cards (38)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Skellige Clans Deck\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/skellige-clans-deck/skellige-clans-deck-leader-cards-2.html\" class=\"drill-down-toc\">\
		Skellige Clans Deck: Leader Cards (2)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/skellige-clans-deck/skellige-clans-deck-unit-cards-35.html\" class=\"drill-down-toc\">\
		Skellige Clans Deck: Unit Cards (35)\
	</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/complete-card-checklist-chart.html\">\
				Complete Card Checklist Chart\
			</a>\
				</li>\
			</ul>\
			<h3>\
		The Gwentlefolk Of The Northern Realms\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms/gwent-vendors-and-players-overview.html\" class=\"drill-down-toc\">\
		Gwent Vendors And Players: Overview\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms/the-gwentlefolk-of-white-orchard.html\" class=\"drill-down-toc\">\
		The Gwentlefolk Of White Orchard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms/the-gwentleman-of-the-royal-palace-in-vizima.html\" class=\"drill-down-toc\">\
		The Gwentleman Of The Royal Palace In Vizima\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms/the-gwentlefolk-of-velen-no-mans-land.html\" class=\"drill-down-toc\">\
		The Gwentlefolk Of Velen (No Man’s Land)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms/the-gwentlefolk-or-novigrad.html\" class=\"drill-down-toc\">\
		The Gwentlefolk Or Novigrad\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms/the-gwentlefolk-of-skellige.html\" class=\"drill-down-toc\">\
		The Gwentlefolk Of Skellige\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Gwentlefolk Of Toussaint\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-toussaint/the-gwentlefolk-of-toussaint.html\" class=\"drill-down-toc\">\
		The Gwentlefolk of Toussaint\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent/the-gwentlefolk-of-toussaint/gwent-complete-card-player-list.html\" class=\"drill-down-toc\">\
		Gwent: Complete Card Player List\
	</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent/merchants-of-the-northern-realms.html\">\
				Merchants Of The Northern Realms\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"quest-walkthrough-prologue\">\
	<h2>Quest Walkthrough: Prologue</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/quest-guidance.html\">\
				Quest Guidance\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Kaer Morhen\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-kaer-morhen/a-good-bath-spoiled.html\" class=\"drill-down-toc\">\
		A Good Bath Spoiled\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-kaer-morhen/running-the-walls.html\" class=\"drill-down-toc\">\
		Running the Walls\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-kaer-morhen/steel-silver-and-signs.html\" class=\"drill-down-toc\">\
		Steel, Silver, and Signs\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Lilac and Gooseberries\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-lilac-and-gooseberries/a-fresh-trail-but-a-fetid-air.html\" class=\"drill-down-toc\">\
		A Fresh Trail, But a Fetid Air\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-lilac-and-gooseberries/trouble-at-the-tavern.html\" class=\"drill-down-toc\">\
		Trouble at the Tavern\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-lilac-and-gooseberries/ess-soond-jakkten-good-hunting-to-you.html\" class=\"drill-down-toc\">\
		Ess Soond Jakkten (Good Hunting to You)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Beast of White Orchard\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard/griffin-hunt-begins.html\" class=\"drill-down-toc\">\
		Griffin Hunt Begins\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard/trawling-for-buckthorn.html\" class=\"drill-down-toc\">\
		Trawling for Buckthorn\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: On Death&#39;s Bed\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/secondary-quest-on-deaths-bed/swallow-this-concoction.html\" class=\"drill-down-toc\">\
		Swallow this Concoction\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Beast of White Orchard (continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard-continued/continue-the-quest.html\" class=\"drill-down-toc\">\
		Continue the Quest\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard-continued/the-sorrowful-hunter-the-bloodied-ascent.html\" class=\"drill-down-toc\">\
		The Sorrowful Hunter, The Bloodied Ascent\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard-continued/ruffling-some-feathers.html\" class=\"drill-down-toc\">\
		Ruffling Some Feathers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Lilac and Gooseberries (continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-lilac-and-gooseberries-continued/continue-the-quest.html\" class=\"drill-down-toc\">\
		Continue the Quest\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Incident at White Orchard\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-incident-at-white-orchard/an-emperors-offer-you-cannot-refuse.html\" class=\"drill-down-toc\">\
		An Emperor&#39;s Offer You Cannot Refuse\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Imperial Audience\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-imperial-audience/common-courtesy-before-the-emperor.html\" class=\"drill-down-toc\">\
		Common Courtesy Before the Emperor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-imperial-audience/may-the-great-sun-light-your-path.html\" class=\"drill-down-toc\">\
		May the Great Sun Light Your Path\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"quest-walkthrough-act-i-velen\">\
	<h2>Quest Walkthrough: Act I (Velen)</h2>\
	<ul>\
		<li>\
			<h3>\
		Main Quest: The Nilfgaardian Connection\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-nilfgaardian-connection/bantering-with-the-barons-boys.html\" class=\"drill-down-toc\">\
		Bantering with the Baron&#39;s Boys\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-nilfgaardian-connection/the-suffering-of-heatherton.html\" class=\"drill-down-toc\">\
		The Suffering of Heatherton\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Bloody Baron\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-bloody-baron/halt-who-goes-there.html\" class=\"drill-down-toc\">\
		Halt! Who Goes There?!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-bloody-baron/a-peaceful-path-strolling-through-the-crows-perch-bailey.html\" class=\"drill-down-toc\">\
		A Peaceful Path: Strolling Through the Crow&#39;s Perch Bailey\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-bloody-baron/a-forceful-path-investigations-lead-to-a-submerged-swim.html\" class=\"drill-down-toc\">\
		A Forceful Path: Investigations Lead to a Submerged Swim\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-bloody-baron/end-one-tough-c-ker.html\" class=\"drill-down-toc\">\
		End: One Tough C--ker\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ciri&#39;s Story: The King of the Wolves\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-the-king-of-the-wolves/wolf-killer.html\" class=\"drill-down-toc\">\
		Wolf Killer\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-the-king-of-the-wolves/you-afraid-then-im-not-neither.html\" class=\"drill-down-toc\">\
		You Afraid? Then I&#39;m Not, Neither\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Family Matters\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters/scrutinizing-the-barons-bedchamber.html\" class=\"drill-down-toc\">\
		Scrutinizing the Baron&#39;s Bedchamber\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters/tamaras-hidden-tabernacle.html\" class=\"drill-down-toc\">\
		Tamara&#39;s Hidden Tabernacle\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Ciri&#39;s Room\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-ciris-room/curses-clothing-and-a-small-spinning-top.html\" class=\"drill-down-toc\">\
		Curses, Clothing, and a Small Spinning Top\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Family Matters (Part 2)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/unstable-return-to-crows-perch.html\" class=\"drill-down-toc\">\
		Unstable: Return to Crow&#39;s Perch\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/a-sobering-conversation-with-baron-strenger.html\" class=\"drill-down-toc\">\
		A Sobering Conversation with Baron Strenger\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/a-miscarriage-of-justice.html\" class=\"drill-down-toc\">\
		A Miscarriage of Justice\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/life-for-a-lubberkin-keeping-the-little-one-calm.html\" class=\"drill-down-toc\">\
		Life for a Lubberkin: Keeping the Little One Calm\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/life-for-a-lubberkin-trail-of-carnage.html\" class=\"drill-down-toc\">\
		Life for a Lubberkin: Trail of Carnage\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/death-to-the-botchling-a-terrible-tantrum.html\" class=\"drill-down-toc\">\
		Death to the Botchling: A Terrible Tantrum\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/death-to-the-botchling-a-ritual-at-wolven-glade.html\" class=\"drill-down-toc\">\
		Death to the Botchling: A Ritual at Wolven Glade\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/merged-paths-fishing-for-clues.html\" class=\"drill-down-toc\">\
		Merged Paths: Fishing for Clues\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/optional-radovids-witch-hunting-maiden.html\" class=\"drill-down-toc\">\
		Optional: Radovid&#39;s Witch-Hunting Maiden\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2/the-woeful-despot.html\" class=\"drill-down-toc\">\
		The Woeful Despot\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ciri&#39;s Story: The Race\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-the-race/the-great-race.html\" class=\"drill-down-toc\">\
		The Great Race\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ciri&#39;s Story: Out of the Shadows\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-out-of-the-shadows/the-barons-savior.html\" class=\"drill-down-toc\">\
		The Baron&#39;s Savior\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-out-of-the-shadows/end-a-hunched-homunculus.html\" class=\"drill-down-toc\">\
		End: A Hunched Homunculus\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Hunting a Witch\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-hunting-a-witch/malleable-minds-at-midcopse.html\" class=\"drill-down-toc\">\
		Malleable Minds at Midcopse\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-hunting-a-witch/another-option-scuttlebutt-among-the-sweepers.html\" class=\"drill-down-toc\">\
		Another Option: Scuttlebutt Among the Sweepers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-hunting-a-witch/yet-another-option-talking-to-the-war-veteran.html\" class=\"drill-down-toc\">\
		Yet Another Option: Talking to the War Veteran\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-hunting-a-witch/the-enchantress-in-the-grotto.html\" class=\"drill-down-toc\">\
		The Enchantress in the Grotto\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Family Matters (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-continued/omens-never-lie.html\" class=\"drill-down-toc\">\
		Omens Never Lie\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: A Princess in Distress\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-a-princess-in-distress/having-a-tinkle-in-the-forest.html\" class=\"drill-down-toc\">\
		Having a Tinkle in the Forest\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-a-princess-in-distress/really-getting-your-goat.html\" class=\"drill-down-toc\">\
		Really Getting Your Goat\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Wandering in the Dark\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-wandering-in-the-dark/a-bridge-too-far.html\" class=\"drill-down-toc\">\
		A Bridge Too Far\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-wandering-in-the-dark/zireael-and-kelpiethe-sword-and-the-horse.html\" class=\"drill-down-toc\">\
		Zireael and Kelpie: The Sword and the Horse\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-wandering-in-the-dark/biting-cold-navigating-the-white-frost.html\" class=\"drill-down-toc\">\
		Biting Cold: Navigating the White Frost\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-wandering-in-the-dark/you-are-stubborn-dhoine.html\" class=\"drill-down-toc\">\
		You Are Stubborn, Dh&#39;Oine\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-wandering-in-the-dark/just-an-illusion-escaping-the-old-ruins.html\" class=\"drill-down-toc\">\
		Just an Illusion: Escaping the Old Ruins\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Magic Lamp\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-magic-lamp/four-guardians-four-flames-standing-proud-in-a-line.html\" class=\"drill-down-toc\">\
		Four Guardians, Four Flames, Standing Proud in a Line\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-magic-lamp/the-hidden-sepulcher.html\" class=\"drill-down-toc\">\
		The Hidden Sepulcher\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ladies of the Wood\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ladies-of-the-wood/sweet-treats-and-meats.html\" class=\"drill-down-toc\">\
		Sweet Treats and Meats\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ladies-of-the-wood/johnny-johnny-ate-a-cat-come-the-morn-some-fur-he-s-t.html\" class=\"drill-down-toc\">\
		Johnny, Johnny, Ate a Cat, Come the Morn Some Fur He S--t!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ladies-of-the-wood/come-out-come-out-wherever-you-are.html\" class=\"drill-down-toc\">\
		Come Out, Come Out, Wherever You Are!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ladies-of-the-wood/johnny-on-the-spot.html\" class=\"drill-down-toc\">\
		Johnny on the Spot\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ladies-of-the-wood/three-crones-crowing.html\" class=\"drill-down-toc\">\
		Three Crones, Crowing\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Whispering Hillock\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-whispering-hillock/tree-spirit-savior-preparation-for-the-ritual.html\" class=\"drill-down-toc\">\
		Tree Spirit Savior: Preparation for the Ritual\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-whispering-hillock/tree-spirit-slayer-retribution-for-the-villagers.html\" class=\"drill-down-toc\">\
		Tree Spirit Slayer: Retribution for the Villagers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Ladies of the Wood (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-ladies-of-the-wood-continued/talk-to-the-ealdorman.html\" class=\"drill-down-toc\">\
		Talk to the Ealdorman\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ciri&#39;s Story: Fleeing the Bog\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-fleeing-the-bog/the-hunt-continues.html\" class=\"drill-down-toc\">\
		The Hunt Continues\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: An Invitation from Keira Metz and A Towerful of Mice\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-an-invitation-from-keira-metz-and-a-towerful-of-mice/a-hike-to-fyke-isle.html\" class=\"drill-down-toc\">\
		A Hike to Fyke Isle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-an-invitation-from-keira-metz-and-a-towerful-of-mice/alexander-the-not-so-great.html\" class=\"drill-down-toc\">\
		Alexander the Not-So-Great\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-an-invitation-from-keira-metz-and-a-towerful-of-mice/path-1-the-displeasure-of-a-pesta.html\" class=\"drill-down-toc\">\
		Path 1: The Displeasure of a Pesta\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-an-invitation-from-keira-metz-and-a-towerful-of-mice/path-2-the-fury-of-a-plague-maiden.html\" class=\"drill-down-toc\">\
		Path 2: The Fury of a Plague Maiden\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-an-invitation-from-keira-metz-and-a-towerful-of-mice/end-im-almost-inclined-to-say-good-work.html\" class=\"drill-down-toc\">\
		End: I&#39;m Almost Inclined to Say &quot;Good Work&quot;\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: A Favor for a Friend\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-a-favor-for-a-friend/package-for-keira.html\" class=\"drill-down-toc\">\
		Package for Keira\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-a-favor-for-a-friend/bychane-gvyn-caeffyl.html\" class=\"drill-down-toc\">\
		Bychane, Gvyn, Caeffyl!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-a-favor-for-a-friend/end-friends-with-benefits.html\" class=\"drill-down-toc\">\
		End: Friends with Benefits\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: For the Advancement of Learning\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-for-the-advancement-of-learning/my-intentions-are-purelike-a-virgins-tears.html\" class=\"drill-down-toc\">\
		My Intentions Are Pure Like a Virgin&#39;s Tears\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-for-the-advancement-of-learning/quest-conclusion-1-the-advancement-of-spurning.html\" class=\"drill-down-toc\">\
		Quest Conclusion 1: The Advancement of Spurning\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-for-the-advancement-of-learning/quest-conclusion-2-the-advancement-of-burning.html\" class=\"drill-down-toc\">\
		Quest Conclusion 2: The Advancement of Burning\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-for-the-advancement-of-learning/quest-conclusion-3-the-advancement-of-yearning.html\" class=\"drill-down-toc\">\
		Quest Conclusion 3: The Advancement of Yearning\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: The Fall of the House of Reardon\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-the-fall-of-the-house-of-reardon/monster-in-my-manor.html\" class=\"drill-down-toc\">\
		Monster in My Manor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-the-fall-of-the-house-of-reardon/a-few-new-tenants.html\" class=\"drill-down-toc\">\
		A Few New Tenants\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Ghosts of the Past\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-ghosts-of-the-past/a-familiar-new-tenant.html\" class=\"drill-down-toc\">\
		A Familiar New Tenant\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-ghosts-of-the-past/here-lies-louis.html\" class=\"drill-down-toc\">\
		Here Lies Louis\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-ghosts-of-the-past/leaving-vester-to-fester.html\" class=\"drill-down-toc\">\
		Leaving Vester to Fester\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Return to Crookback Bog\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog/return-to-crookback-bog.html\" class=\"drill-down-toc\">\
		Return to Crookback Bog\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog/path-1-decimated-downwarren.html\" class=\"drill-down-toc\">\
		Path 1: Decimated Downwarren\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog/path-2-disquisition-in-downwarren.html\" class=\"drill-down-toc\">\
		Path 2: Disquisition in Downwarren\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog/paths-1-and-2-together-but-not-reunited.html\" class=\"drill-down-toc\">\
		Paths 1 and 2: Together, But Not Reunited\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog/paths-1-and-2-fending-off-a-fiend.html\" class=\"drill-down-toc\">\
		Paths 1 and 2: Fending off a Fiend\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog/end-the-fate-of-gran.html\" class=\"drill-down-toc\">\
		End: The Fate of Gran\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"quest-walkthrough-act-i-novigrad\">\
	<h2>Quest Walkthrough: Act I (Novigrad)</h2>\
	<ul>\
		<li>\
			<h3>\
		Main Quest: Pyres of Novigrad\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad/new-fires-and-an-old-flame.html\" class=\"drill-down-toc\">\
		New Fires, and an Old Flame\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad/chatting-or-tracking.html\" class=\"drill-down-toc\">\
		Chatting or Tracking\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad/a-hive-of-scum-and-freakery.html\" class=\"drill-down-toc\">\
		A Hive of Scum and Freakery\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad/alternate-entrance-the-sewer-slog.html\" class=\"drill-down-toc\">\
		Alternate Entrance: The Sewer Slog\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad/a-refreshing-swim-in-a-filthy-canal.html\" class=\"drill-down-toc\">\
		A Refreshing Swim in a Filthy Canal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad/you-dirty-rat.html\" class=\"drill-down-toc\">\
		You Dirty Rat!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Novigrad Dreaming\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-novigrad-dreaming/the-dreams-in-the-witch-house.html\" class=\"drill-down-toc\">\
		The Dreams in the Witch House\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-novigrad-dreaming/the-dandelion-and-the-swallow.html\" class=\"drill-down-toc\">\
		The Dandelion and the Swallow\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Broken Flowers\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/partly-sage-advice-at-the-rosemary-and-thyme.html\" class=\"drill-down-toc\">\
		Partly Sage Advice at the Rosemary and Thyme\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/vespula-a-downtrodden-washerwoman.html\" class=\"drill-down-toc\">\
		Vespula: A Downtrodden Washerwoman\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/elihal-an-open-minded-elf.html\" class=\"drill-down-toc\">\
		Elihal: An Open-Minded Elf\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/marabella-dandelions-a-real-fungi-to-be-with.html\" class=\"drill-down-toc\">\
		Marabella: Dandelion&#39;s a Real Fungi to be With\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/rosa-var-attre-double-trouble.html\" class=\"drill-down-toc\">\
		Rosa Var Attre: Double Trouble\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/molly-off-to-the-races.html\" class=\"drill-down-toc\">\
		Molly: Off to the Races\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/jockeying-for-position-with-general-voorhis.html\" class=\"drill-down-toc\">\
		Jockeying for Position with General Voorhis\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/finding-priscilla-sentenced-to-an-evening-of-poetry.html\" class=\"drill-down-toc\">\
		Finding Priscilla: Sentenced to an Evening of Poetry\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers/quest-conclusion-raising-a-ruckus-but-leaving-little-trace.html\" class=\"drill-down-toc\">\
		Quest Conclusion: Raising a Ruckus But Leaving Little Trace\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Get Junior\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior/first-ever-barney-with-your-p-k-hangin-out.html\" class=\"drill-down-toc\">\
		First Ever Barney with Your P---K Hangin Out\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior/none-of-this-swinging-your-steel-c-k-about.html\" class=\"drill-down-toc\">\
		None of This Swinging Your Steel C--K About\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior/cleaver-cleaned-it-out.html\" class=\"drill-down-toc\">\
		Cleaver Cleaned It Out\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: The Gangs of Novigrad\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-the-gangs-of-novigrad/helping-the-smallest-of-the-big-four.html\" class=\"drill-down-toc\">\
		Helping the Smallest of the Big Four\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Get Junior (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued/casino-lets-make-a-deal.html\" class=\"drill-down-toc\">\
		Casino: Lets Make a Deal\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Honor Among Thieves\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-honor-among-thieves/beggars-belief.html\" class=\"drill-down-toc\">\
		Beggars&#39; Belief\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Get Junior (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued2/arena-into-the-pit.html\" class=\"drill-down-toc\">\
		Arena: Into the Pit\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued2/vernon-roche-temerias-last-hope.html\" class=\"drill-down-toc\">\
		Vernon Roche: Temeria&#39;s Last Hope\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued2/king-takes-pawn.html\" class=\"drill-down-toc\">\
		King Takes Pawn\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued2/squealing-like-sows-being-slaughtered.html\" class=\"drill-down-toc\">\
		Squealing Like Sows Being Slaughtered\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued2/living-down-to-his-name.html\" class=\"drill-down-toc\">\
		Living Down to His Name\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ciri&#39;s Story: Visiting Junior\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-ciris-story-visiting-junior/dudu-rescue.html\" class=\"drill-down-toc\">\
		Dudu Rescue\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Get Junior (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued3/end-got-junior.html\" class=\"drill-down-toc\">\
		End: Got Junior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: A Favor for Radovid\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-a-favor-for-radovid/a-contract-from-the-mage-murderer.html\" class=\"drill-down-toc\">\
		A Contract from the Mage Murderer\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Count Reuven&#39;s Treasure\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/show-and-tell-down-the-well.html\" class=\"drill-down-toc\">\
		Show and Tell Down the Well\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/even-worse-smelling-than-normal.html\" class=\"drill-down-toc\">\
		Even Worse-Smelling than Normal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/pardon-my-beauclairoise-but-who-f-king-nicked-my-gold.html\" class=\"drill-down-toc\">\
		Pardon My Beauclairoise, but Who F--king Nicked My Gold?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/keeping-your-cool-or-testing-your-mettle.html\" class=\"drill-down-toc\">\
		Keeping Your Cool, or Testing Your Mettle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/infiltration-nailed-it.html\" class=\"drill-down-toc\">\
		Infiltration: Nailed It\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/eradication-executing-menge-without-breaking-a-nail.html\" class=\"drill-down-toc\">\
		Eradication: Executing Menge without Breaking a Nail\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure/infiltration-and-eradication-outpost-extraction.html\" class=\"drill-down-toc\">\
		Infiltration and Eradication: Outpost Extraction\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Play&#39;s The Thing\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-the-plays-the-thing/it-is-not-in-the-stars-to-hold-our-destiny-but-in-ourselves.html\" class=\"drill-down-toc\">\
		It is not in the Stars to Hold Our Destiny, but in Ourselves\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-the-plays-the-thing/if-music-be-the-food-of-love-play-on.html\" class=\"drill-down-toc\">\
		If Music be the Food of Love, Play On\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-the-plays-the-thing/to-do-a-great-right-do-a-little-wrong.html\" class=\"drill-down-toc\">\
		To Do a Great Right Do a Little Wrong\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-the-plays-the-thing/o-had-i-but-followed-the-arts.html\" class=\"drill-down-toc\">\
		O, Had I But Followed the Arts!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-the-plays-the-thing/boldness-be-my-friend.html\" class=\"drill-down-toc\">\
		Boldness Be My Friend\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: A Poet Under Pressure\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-a-poet-under-pressure/foreseen-at-the-ravine.html\" class=\"drill-down-toc\">\
		Foreseen at the Ravine\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-a-poet-under-pressure/plucking-a-dandelion.html\" class=\"drill-down-toc\">\
		Plucking a Dandelion\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Ciri&#39;s Story: Breakneck Speed\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-ciris-story-breakneck-speed/no-sanctuary-at-this-temple.html\" class=\"drill-down-toc\">\
		No Sanctuary at This Temple\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-ciris-story-breakneck-speed/tying-up-loose-ends-in-novigrad.html\" class=\"drill-down-toc\">\
		Tying up Loose Ends in Novigrad\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Cabaret\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-cabaret/trouble-in-paradise.html\" class=\"drill-down-toc\">\
		Trouble in Paradise\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-cabaret/a-hero-is-born.html\" class=\"drill-down-toc\">\
		A Hero is Born\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-cabaret/polly-put-the-choreography-on.html\" class=\"drill-down-toc\">\
		Polly Put the Choreography On\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-cabaret/placating-the-placard-makers-collectors.html\" class=\"drill-down-toc\">\
		Placating the Placard-Makers Collectors\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-cabaret/off-to-the-races.html\" class=\"drill-down-toc\">\
		Off to the Races\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Carnal Sins\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-carnal-sins/the-act-of-a-demented-mind.html\" class=\"drill-down-toc\">\
		The Act of a Demented Mind\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-carnal-sins/we-seek-the-corpse-of-a-dwarven-woodcarver.html\" class=\"drill-down-toc\">\
		We Seek the Corpse of a Dwarven Woodcarver\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-carnal-sins/seeking-sacrilege-asking-thricely.html\" class=\"drill-down-toc\">\
		Seeking Sacrilege: Asking Thricely\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-carnal-sins/a-crisis-of-faith.html\" class=\"drill-down-toc\">\
		A Crisis of Faith\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-carnal-sins/a-knockaround-guy.html\" class=\"drill-down-toc\">\
		A Knockaround Guy\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: A Dangerous Game\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-dangerous-game/up-to-his-neck-in-s-te-without-a-shovel.html\" class=\"drill-down-toc\">\
		Up to His Neck in S--te Without a Shovel\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-dangerous-game/zeds-dead-baby-zeds-dead.html\" class=\"drill-down-toc\">\
		Zed&#39;s Dead, Baby. Zed&#39;s Dead.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-dangerous-game/optional-a-life-or-death-game-of-gwent.html\" class=\"drill-down-toc\">\
		(Optional) A Life-or-Death Game of Gwent\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-dangerous-game/high-spirits-with-caesar-bilzen.html\" class=\"drill-down-toc\">\
		High Spirits with Caesar Bilzen\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: A Matter of Life and Death\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-matter-of-life-and-death/whats-the-best-price-on-a-trout.html\" class=\"drill-down-toc\">\
		What&#39;s the Best Price on a Trout?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-matter-of-life-and-death/foxy-lady.html\" class=\"drill-down-toc\">\
		Foxy Lady\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-matter-of-life-and-death/finding-a-panther-on-the-prowl.html\" class=\"drill-down-toc\">\
		Finding a Panther on the Prowl\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-matter-of-life-and-death/inch-by-inch-little-frog.html\" class=\"drill-down-toc\">\
		Inch by Inch, Little Frog\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Novigrad, Closed City\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-novigrad-closed-city/radovids-iron-fist.html\" class=\"drill-down-toc\">\
		Radovid&#39;s Iron Fist\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Now or Never\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-now-or-never/culling-of-the-mages.html\" class=\"drill-down-toc\">\
		Culling of the Mages\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-now-or-never/going-to-bits.html\" class=\"drill-down-toc\">\
		Going to Bits\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-now-or-never/under-the-kingfishers-nest.html\" class=\"drill-down-toc\">\
		Under the Kingfisher&#39;s Nest\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-now-or-never/bloodletting-in-the-sewers.html\" class=\"drill-down-toc\">\
		Bloodletting in the Sewers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-now-or-never/quest-conclusion-one-last-farewell.html\" class=\"drill-down-toc\">\
		Quest Conclusion: One Last Farewell?\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: An Eye for an Eye\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-an-eye-for-an-eye/temeria-thats-what-matters.html\" class=\"drill-down-toc\">\
		Temeria: That&#39;s What Matters\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-an-eye-for-an-eye/mulbrydale-the-nilfgaard-in-tatters.html\" class=\"drill-down-toc\">\
		Mulbrydale: The Nilfgaard in Tatters\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: A Deadly Plot\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-deadly-plot/only-a-dead-radovid-means-a-free-temeria.html\" class=\"drill-down-toc\">\
		Only a Dead Radovid Means a Free Temeria\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-deadly-plot/tracking-your-quarry.html\" class=\"drill-down-toc\">\
		Tracking Your Quarry\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-deadly-plot/dumb-as-a-bag-of-ogg-pogg-and-roggs.html\" class=\"drill-down-toc\">\
		Dumb as a Bag of Ogg, Pogg, and Roggs\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Redania&#39;s Most Wanted\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-redanias-most-wanted/a-contract-from-the-mage-murderer.html\" class=\"drill-down-toc\">\
		A Contract from the Mage Murderer\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-redanias-most-wanted/the-perfect-hideout-for-an-owl.html\" class=\"drill-down-toc\">\
		The Perfect Hideout for an Owl\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-redanias-most-wanted/dropping-in-unannounced.html\" class=\"drill-down-toc\">\
		Dropping in Unannounced\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-redanias-most-wanted/optional-triss-gaining-trust-with-triss.html\" class=\"drill-down-toc\">\
		Optional (Triss): Gaining Trust with Triss\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-redanias-most-wanted/optional-yennefer-revelations-with-the-raven-haired-one.html\" class=\"drill-down-toc\">\
		Optional (Yennefer): Revelations with the Raven-Haired One\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"quest-walkthrough-act-i-skellige\">\
	<h2>Quest Walkthrough: Act I (Skellige)</h2>\
	<ul>\
		<li>\
			<h3>\
		Main Quest: Destination: Skellige\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-destination-skellige/soused-at-the-golden-sturgeon.html\" class=\"drill-down-toc\">\
		Soused at the Golden Sturgeon\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-destination-skellige/know-the-way-to-kaer-trolde.html\" class=\"drill-down-toc\">\
		Know the Way to Kaer Trolde?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-destination-skellige/the-final-voyage-of-good-king-bran.html\" class=\"drill-down-toc\">\
		The Final Voyage of Good King Bran\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The King is Dead. Long Live the King\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-king-is-deadlong-live-the-king/attire-befitting-a-witcher.html\" class=\"drill-down-toc\">\
		Attire Befitting a Witcher\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-king-is-deadlong-live-the-king/may-our-horns-echo-midst-the-cliffs-and-peaks.html\" class=\"drill-down-toc\">\
		May Our Horns Echo Midst the Cliffs and Peaks\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-king-is-deadlong-live-the-king/inter-island-animosity.html\" class=\"drill-down-toc\">\
		Inter-Island Animosity\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-king-is-deadlong-live-the-king/the-trial-of-taxidermy.html\" class=\"drill-down-toc\">\
		The Trial of Taxidermy\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-king-is-deadlong-live-the-king/making-the-earth-move.html\" class=\"drill-down-toc\">\
		Making the Earth Move\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Echoes of the Past\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-echoes-of-the-past/only-ignorant-fools-belittle-myths.html\" class=\"drill-down-toc\">\
		Only Ignorant Fools Belittle Myths\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-echoes-of-the-past/magical-blasts-from-the-past.html\" class=\"drill-down-toc\">\
		Magical Blasts from the Past\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Missing Persons\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-missing-persons/razed-huts-and-fresh-graves.html\" class=\"drill-down-toc\">\
		Razed Huts and Fresh Graves\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-missing-persons/nameless-craven-some-werewolf-combat.html\" class=\"drill-down-toc\">\
		Nameless: Craven Some Werewolf Combat\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Nameless\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-nameless/trail-of-the-craven.html\" class=\"drill-down-toc\">\
		Trail of the Craven\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-nameless/overcoming-an-undying-lycanthrope.html\" class=\"drill-down-toc\">\
		Overcoming an Undying Lycanthrope\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Calm Before the Storm\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-calm-before-the-storm/your-blood-needs-thawin.html\" class=\"drill-down-toc\">\
		Your Blood Needs Thawin\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Nameless (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-nameless-continued/skellige-search-successful.html\" class=\"drill-down-toc\">\
		Skellige Search Successful\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: The Mysterious Passenger\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-mysterious-passenger/selling-the-ugliest-man-alive.html\" class=\"drill-down-toc\">\
		Selling the Ugliest Man Alive\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: The Last Wish\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-last-wish/dangerous-sometimes-malicious-all-the-time.html\" class=\"drill-down-toc\">\
		Dangerous Sometimes. Malicious All the Time\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-last-wish/too-much-studying-can-kill-you.html\" class=\"drill-down-toc\">\
		Too Much Studying Can Kill You\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-last-wish/the-spirits-of-skellige-favor-you.html\" class=\"drill-down-toc\">\
		The Spirits of Skellige Favor You\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: The Lord of Undvik\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/a-lost-son-on-a-blighted-isle.html\" class=\"drill-down-toc\">\
		A Lost Son on a Blighted Isle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/round-the-rugged-rocks-the-ragged-rascals-ran.html\" class=\"drill-down-toc\">\
		Round the Rugged Rocks the Ragged Rascals Ran\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/short-on-nails-and-twine.html\" class=\"drill-down-toc\">\
		Short on Nails and Twine\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/tracking-through-the-tundra.html\" class=\"drill-down-toc\">\
		Tracking Through the Tundra\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/rescuing-folan-from-the-pot.html\" class=\"drill-down-toc\">\
		Rescuing Folan from the Pot\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/harried-into-the-hills.html\" class=\"drill-down-toc\">\
		Harried into the Hills\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/the-craite-escape.html\" class=\"drill-down-toc\">\
		The Craite Escape\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik/geralt-the-giantslayer.html\" class=\"drill-down-toc\">\
		Geralt the Giantslayer\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Possession\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/a-lost-daughter-on-a-haunted-isle.html\" class=\"drill-down-toc\">\
		A Lost Daughter on a Haunted Isle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/the-time-has-come-to-get-cerys.html\" class=\"drill-down-toc\">\
		The Time Has Come to Get Cerys\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/a-house-of-dark-torment.html\" class=\"drill-down-toc\">\
		A House of Dark Torment\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/an-eye-for-an-aki.html\" class=\"drill-down-toc\">\
		An Eye for an Aki\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/dark-illusions.html\" class=\"drill-down-toc\">\
		Dark Illusions\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/trickery-throw-the-baby-out-with-the-kindling.html\" class=\"drill-down-toc\">\
		Trickery: Throw the Baby out with the Kindling\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession/slaughter-you-and-hym.html\" class=\"drill-down-toc\">\
		Slaughter: You and Hym\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: King&#39;s Gambit\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/at-a-good-feast-mead-and-blood-flow-in-equal-measure.html\" class=\"drill-down-toc\">\
		At a Good Feast, Mead and Blood Flow in Equal Measure\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/feast-of-the-bears.html\" class=\"drill-down-toc\">\
		Feast of the Bears\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/surreptitious-cerys-cellar-smells-where-a-traitor-dwells.html\" class=\"drill-down-toc\">\
		Surreptitious Cerys: Cellar Smells Where a Traitor Dwells\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/surreptitious-cerys-bran-dishing-evidence.html\" class=\"drill-down-toc\">\
		Surreptitious Cerys: Bran-Dishing Evidence\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/cerys-conclusion-whose-hand-does-the-blood-stain.html\" class=\"drill-down-toc\">\
		Cerys&#39; Conclusion: Whose Hand Does the Blood Stain\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/headstrong-hjalmar-brimming-with-bestiality-and-barbarism.html\" class=\"drill-down-toc\">\
		Headstrong Hjalmar: Brimming with Bestiality and Barbarism\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit/hjalmars-conclusion-washing-away-disgrace-with-the-blood-of-foes.html\" class=\"drill-down-toc\">\
		Hjalmars Conclusion: Washing Away Disgrace with the Blood of Foes\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Coronation\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-coronation/we-are-skellige.html\" class=\"drill-down-toc\">\
		We Are Skellige!!\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"quest-walkthrough-act-ii\">\
	<h2>Quest Walkthrough: Act II</h2>\
	<ul>\
		<li>\
			<h3>\
		Main Quest: Ugly Baby\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-ugly-baby/umamma.html\" class=\"drill-down-toc\">\
		Umamma!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Disturbance\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-disturbance/the-potestaquisitor-inquisitor.html\" class=\"drill-down-toc\">\
		The Potestaquisitor Inquisitor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-disturbance/scoping-out-some-interference.html\" class=\"drill-down-toc\">\
		Scoping Out Some Interference\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: To Bait a Forktail\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-to-bait-a-forktail/the-nose-knows.html\" class=\"drill-down-toc\">\
		The Nose Knows\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Final Trial\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-final-trial/no-walk-in-the-park.html\" class=\"drill-down-toc\">\
		No Walk in the Park\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-final-trial/fogs-thick-as-curdled-milk.html\" class=\"drill-down-toc\">\
		Fogs Thick as Curdled Milk\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-final-trial/step-softly-or-youll-wake-old-speartip.html\" class=\"drill-down-toc\">\
		Step Softly or Youll Wake Old Speartip\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-final-trial/this-mountain-trolly-mountain.html\" class=\"drill-down-toc\">\
		This Mountain Trolly Mountain!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: No Place Like Home\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-no-place-like-home/ancient-rites-and-alcohol.html\" class=\"drill-down-toc\">\
		Ancient Rites and Alcohol\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-no-place-like-home/snacks-appeal-or-sex-appeal.html\" class=\"drill-down-toc\">\
		Snacks Appeal, or Sex Appeal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-no-place-like-home/getting-eskels-goat.html\" class=\"drill-down-toc\">\
		Getting Eskels Goat\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Va Fail, Elaine\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-va-fail-elaine/wretch-on-the-rack.html\" class=\"drill-down-toc\">\
		Wretch on the Rack\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Brothers in Arms\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms/assembling-a-force.html\" class=\"drill-down-toc\">\
		Assembling a Force\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Brothers in Arms: Nilfgaard\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-nilfgaard/emperor-emhyr-var-emreis.html\" class=\"drill-down-toc\">\
		Emperor Emhyr Var Emreis\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Brothers in Arms: Velen\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-velen/letho.html\" class=\"drill-down-toc\">\
		Letho\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-velen/keira-metz.html\" class=\"drill-down-toc\">\
		Keira Metz\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Brothers in Arms: Novigrad\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-novigrad/vernon-roche-and-ves.html\" class=\"drill-down-toc\">\
		Vernon Roche and Ves\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-novigrad/zoltan-chivay.html\" class=\"drill-down-toc\">\
		Zoltan Chivay\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-novigrad/sigismund-dijkstra.html\" class=\"drill-down-toc\">\
		Sigismund Dijkstra\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-novigrad/triss-merigold.html\" class=\"drill-down-toc\">\
		Triss Merigold\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Brothers in Arms: Skellige\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-skellige/crach-an-craite.html\" class=\"drill-down-toc\">\
		Crach an Craite\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-skellige/cerys-an-craite.html\" class=\"drill-down-toc\">\
		Cerys an Craite\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-skellige/hjalmar-an-craite.html\" class=\"drill-down-toc\">\
		Hjalmar an Craite\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-skellige/ermion.html\" class=\"drill-down-toc\">\
		Ermion\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-skellige/folan-and-vigi.html\" class=\"drill-down-toc\">\
		Folan and Vigi\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Isle of Mists\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-isle-of-mists/its-off-to-work-you-go.html\" class=\"drill-down-toc\">\
		It&#39;s Off to Work You Go\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-isle-of-mists/a-long-walk-off-a-high-column.html\" class=\"drill-down-toc\">\
		A Long Walk Off a High Column\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-isle-of-mists/ferenc-flattened-by-a-fiend.html\" class=\"drill-down-toc\">\
		Ferenc Flattened by a Fiend\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-isle-of-mists/the-fleeing-somnabulist.html\" class=\"drill-down-toc\">\
		The Fleeing Somnabulist\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Battle of Kaer Morhen\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-battle-of-kaer-morhen/old-friends.html\" class=\"drill-down-toc\">\
		Old Friends\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-battle-of-kaer-morhen/battle-preparations.html\" class=\"drill-down-toc\">\
		Battle Preparations\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-battle-of-kaer-morhen/i-hate-portals.html\" class=\"drill-down-toc\">\
		I Hate Portals\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-battle-of-kaer-morhen/confront-the-hunt.html\" class=\"drill-down-toc\">\
		Confront the Hunt\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-battle-of-kaer-morhen/a-wild-frenzy.html\" class=\"drill-down-toc\">\
		A Wild Frenzy\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Blood on the Battlefield\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-blood-on-the-battlefield/paying-respects-amongst-friends.html\" class=\"drill-down-toc\">\
		Paying Respects Amongst Friends\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-blood-on-the-battlefield/letting-go-in-the-snow-or-drowning-in-drink.html\" class=\"drill-down-toc\">\
		Letting Go in the Snow, or Drowning in Drink\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-blood-on-the-battlefield/fathers-day.html\" class=\"drill-down-toc\">\
		Father&#39;s Day\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"quest-walkthrough-act-iii\">\
	<h2>Quest Walkthrough: Act III</h2>\
	<ul>\
		<li>\
			<h3>\
		Main Quest: Bald Mountain\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-bald-mountain/feast-of-gifts-the-wiseman-the-guard-and-the-godling.html\" class=\"drill-down-toc\">\
		Feast of Gifts: The Wiseman, the Guard, and the Godling\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-bald-mountain/feast-of-gifts-diving-for-the-defilers-oren.html\" class=\"drill-down-toc\">\
		Feast of Gifts: Diving for the Defilers Oren\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-bald-mountain/ciris-quest-getting-to-the-root-of-the-problem.html\" class=\"drill-down-toc\">\
		Ciris Quest: Getting to the Root of the Problem\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-bald-mountain/geralts-quest-a-cut-above-the-rest.html\" class=\"drill-down-toc\">\
		Geralt&#39;s Quest: A Cut Above the Rest\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Final Preparations\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-final-preparations/tying-up-loose-ends.html\" class=\"drill-down-toc\">\
		Tying Up Loose Ends\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Blindingly Obvious\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-blindingly-obvious/hydromancy-at-the-passiflora.html\" class=\"drill-down-toc\">\
		Hydromancy at the Passiflora\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-blindingly-obvious/philippa-doesnt-give-a-hoot.html\" class=\"drill-down-toc\">\
		Philippa Doesnt Give a Hoot\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: A Final Kindness\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-a-final-kindness/this-much-we-can-do.html\" class=\"drill-down-toc\">\
		This Much We Can Do\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Great Escape\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-great-escape/the-great-escape.html\" class=\"drill-down-toc\">\
		The Great Escape\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-great-escape/deep-below-deireadh-prison.html\" class=\"drill-down-toc\">\
		Deep Below Deireadh Prison\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-great-escape/slaughter-for-the-sorceresses.html\" class=\"drill-down-toc\">\
		Slaughter for the Sorceresses\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Payback\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-payback/fading-memories-whoreson-junior.html\" class=\"drill-down-toc\">\
		Fading Memories: Whoreson Junior\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-payback/fading-memories-bea-the-waitress.html\" class=\"drill-down-toc\">\
		Fading Memories: Bea the Waitress\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-payback/fading-memories-valdos-troupe.html\" class=\"drill-down-toc\">\
		Fading Memories: Valdos Troupe\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Final Preparations (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-final-preparations-continued/come-in-to-the-coven.html\" class=\"drill-down-toc\">\
		Come in to the Coven\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: It Takes Three to Tango\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-it-takes-three-to-tango/im-a-little-tied-up-at-the-moment.html\" class=\"drill-down-toc\">\
		I&#39;m a Little Tied up at the Moment\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Through Time And Space\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-through-time-and-space/mucky-pictures.html\" class=\"drill-down-toc\">\
		Mucky Pictures\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-through-time-and-space/danger-in-the-ddiddiwedht-desert.html\" class=\"drill-down-toc\">\
		Danger In The Ddiddiwedht Desert\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-through-time-and-space/a-foul-and-pestilent-congregationof-vapours.html\" class=\"drill-down-toc\">\
		A Foul and Pestilent Congregationof Vapours\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-through-time-and-space/destroyed-by-the-white-frost.html\" class=\"drill-down-toc\">\
		Destroyed by the White Frost\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-through-time-and-space/awakening-at-the-palace.html\" class=\"drill-down-toc\">\
		Awakening at the Palace\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: Reason of State\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-reason-of-state/to-kill-a-king.html\" class=\"drill-down-toc\">\
		To Kill a King\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-reason-of-state/the-audacity-of-monarchs.html\" class=\"drill-down-toc\">\
		The Audacity of Monarchs\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-reason-of-state/rivers-of-redanian-blood.html\" class=\"drill-down-toc\">\
		Rivers of Redanian Blood\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Battle Preparations\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-battle-preparations/initial-preparations.html\" class=\"drill-down-toc\">\
		Initial Preparations\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Sunstone\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone/the-emperors-treaty-skellige-answers.html\" class=\"drill-down-toc\">\
		The Emperor&#39;s Treaty: Skellige Answers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone/having-a-whale-of-a-time.html\" class=\"drill-down-toc\">\
		Having a Whale of a Time\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone/diving-for-more-than-pearls.html\" class=\"drill-down-toc\">\
		Diving for More than Pearls\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone/elvish-ruins-and-avallachs-lair.html\" class=\"drill-down-toc\">\
		Elvish Ruins and Avallac&#39;h&#39;s Lair\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Battle Preparations (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-battle-preparations-continued/above-suspicion.html\" class=\"drill-down-toc\">\
		Above suspicion?\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Veni Vidi Vigo\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-veni-vidi-vigo/swimming-sneaking-surrendering.html\" class=\"drill-down-toc\">\
		Swimming, Sneaking, Surrendering\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: The Sunstone (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone-continued/opening-the-door-of-fiallan.html\" class=\"drill-down-toc\">\
		Opening the Door of Fiallan\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone-continued/making-light-of-the-situation.html\" class=\"drill-down-toc\">\
		Making Light of the Situation\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Child of the Elder Blood\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-child-of-the-elder-blood/you-cant-just-knock.html\" class=\"drill-down-toc\">\
		You Can&#39;t Just Knock?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-child-of-the-elder-blood/the-aen-hen-ichaer.html\" class=\"drill-down-toc\">\
		The Aen Hen Ichaer\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Skjall&#39;s Grave\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-skjalls-grave/craven-no-more.html\" class=\"drill-down-toc\">\
		Craven No More\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-skjalls-grave/end-battle-preparations-to-war.html\" class=\"drill-down-toc\">\
		End: Battle Preparations: To War!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: On Thin Ice\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-on-thin-ice/i-give-you-my-heart-but-i-shall-take-your-head.html\" class=\"drill-down-toc\">\
		I Give You My Heart. But I Shall Take Your Head.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-on-thin-ice/i-give-you-my-blade-you-better-end-up-dead.html\" class=\"drill-down-toc\">\
		I Give You My Blade. You Better End Up Dead!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-on-thin-ice/bearing-the-brunt-of-the-wild-hunt.html\" class=\"drill-down-toc\">\
		Bearing the Brunt of the Wild Hunt\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-on-thin-ice/end-cold-contempt.html\" class=\"drill-down-toc\">\
		End: Cold Contempt\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Tedd Deireadh, The Final Age\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-tedd-deireadh-the-final-age/the-conjunction-of-spheres-has-begun.html\" class=\"drill-down-toc\">\
		The Conjunction of Spheres Has Begun\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-tedd-deireadh-the-final-age/and-giants-shall-face-giants-in-battle.html\" class=\"drill-down-toc\">\
		And Giants Shall Face Giants in Battle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-tedd-deireadh-the-final-age/the-wild-hunt-are-defeated-the-white-frost-is-not.html\" class=\"drill-down-toc\">\
		The Wild Hunt Are Defeated. The White Frost Is Not.\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"epilogue-and-endings\">\
	<h2>Epilogue And Endings</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/author-note.html\">\
				Author Note\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Something Ends, Something Begins (I)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-i/lament-for-a-slain-swallow.html\" class=\"drill-down-toc\">\
		Lament For A Slain Swallow\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-i/despair-devours-you-as-maggots-devour-a-corpse.html\" class=\"drill-down-toc\">\
		Despair Devours You, As Maggots Devour A Corpse\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Something Ends, Something Begins (II)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-ii/the-impatient-huntress.html\" class=\"drill-down-toc\">\
		The Impatient Huntress\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-ii/playing-hare-and-hounds.html\" class=\"drill-down-toc\">\
		Playing Hare And Hounds\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-ii/vesemirs-technique.html\" class=\"drill-down-toc\">\
		Vesemir’s Technique\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-ii/youll-be-fine-youre-a-witcher.html\" class=\"drill-down-toc\">\
		You’ll Be Fine. You’re A Witcher.\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Something Ends, Something Begins (III)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-iii/the-gentleman-will-lead-the-emperor-will-follow.html\" class=\"drill-down-toc\">\
		The Gentleman Will Lead. The Emperor Will Follow.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-iii/a-blade-fit-for-a-witcher.html\" class=\"drill-down-toc\">\
		A Blade Fit For A Witcher\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-iii/the-sword-and-the-swallow.html\" class=\"drill-down-toc\">\
		The Sword And The Swallow\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Main Quest: Endings\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/main-quest-endings/character-endings.html\" class=\"drill-down-toc\">\
		Character Endings\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/epilogue-and-endings/main-quest-endings/final-endings.html\" class=\"drill-down-toc\">\
		Final Endings\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"episode-1-main-quests-hearts-of-stone\">\
	<h2>Episode 1: Main Quests: Hearts Of Stone</h2>\
	<ul>\
		<li>\
			<h3>\
		Evil’s First Soft Touches\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/art-appreciation-with-olgierd.html\" class=\"drill-down-toc\">\
		Art Appreciation With Olgierd\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/the-road-to-the-toad.html\" class=\"drill-down-toc\">\
		The Road To The Toad\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/big-bad-ugly-squats-in-the-sewers.html\" class=\"drill-down-toc\">\
		Big. Bad. Ugly. Squats In The Sewers.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/escaping-the-phakbarthojl.html\" class=\"drill-down-toc\">\
		Escaping The Phakbarthojl\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/blood-on-the-sands.html\" class=\"drill-down-toc\">\
		Blood On The Sands\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/the-vassal-of-master-mirror.html\" class=\"drill-down-toc\">\
		The Vassal Of Master Mirror\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches/end-heads-will-roll.html\" class=\"drill-down-toc\">\
		End: Heads Will Roll\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Dead Man’s Party\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/hide-and-ghost-seek.html\" class=\"drill-down-toc\">\
		Hide And Ghost Seek\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/a-sartorial-reanimation.html\" class=\"drill-down-toc\">\
		A Sartorial Reanimation\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/walking-with-a-dead-man-over-my-shoulder.html\" class=\"drill-down-toc\">\
		Walking With A Dead Man Over My Shoulder\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/who-could-ask-for-more.html\" class=\"drill-down-toc\">\
		Who Could Ask For More?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/ghost-dance.html\" class=\"drill-down-toc\">\
		Ghost Dance\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/an-abrupt-departure.html\" class=\"drill-down-toc\">\
		An Abrupt Departure\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party/a-wish-fulfilled.html\" class=\"drill-down-toc\">\
		A Wish Fulfilled\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Shani’s Quest: A Midnight Clear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/shanis-quest-a-midnight-clear/a-sprig-or-a-swig.html\" class=\"drill-down-toc\">\
		A Sprig Or A Swig\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/shanis-quest-a-midnight-clear/a-stroll-towards-millers-lake.html\" class=\"drill-down-toc\">\
		A Stroll Towards Miller’s Lake\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/shanis-quest-a-midnight-clear/row-me-to-the-moon.html\" class=\"drill-down-toc\">\
		Row Me To The Moon\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Open Sesame (Part 1)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-1/before-the-auction-stand-to-attention-and-shut-yer-geggy.html\" class=\"drill-down-toc\">\
		Before The Auction: Stand To Attention And Shut Yer Geggy!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-1/before-the-auction-vimmes-interesting-associates.html\" class=\"drill-down-toc\">\
		Before The Auction: Vimme’s Interesting Associates\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-1/at-the-auction-do-your-bidding.html\" class=\"drill-down-toc\">\
		At The Auction: Do Your Bidding\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-1/after-the-auctiondont-expect-a-warm-welcome.html\" class=\"drill-down-toc\">\
		After The Auction:don’t Expect A Warm Welcome\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Open Sesame: Breaking And Entering\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-breaking-and-entering/option-1-someone-has-hassled-the-hoff.html\" class=\"drill-down-toc\">\
		Option #1: Someone Has Hassled The Hoff\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-breaking-and-entering/option-2-gallos-humor-perform-or-pay.html\" class=\"drill-down-toc\">\
		Option #2: Gallo’s Humor; Perform Or Pay\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Open Sesame: The Safecracker\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-the-safecracker/option-1-an-explosive-temperamental-cuckold.html\" class=\"drill-down-toc\">\
		Option #1: An Explosive, Temperamental Cuckold\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-the-safecracker/option-2-hans-off-quinto.html\" class=\"drill-down-toc\">\
		Option #2: Hans Off Quinto!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Open Sesame: Witcher Seasonings\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-witcher-seasonings/a-heady-concoction-of-blood-bane-and-spirit.html\" class=\"drill-down-toc\">\
		A Heady Concoction Of Blood, Bane, And Spirit\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-witcher-seasonings/fishing-for-clues.html\" class=\"drill-down-toc\">\
		Fishing For Clues\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-witcher-seasonings/horrendous-uprisings-from-the-bottom.html\" class=\"drill-down-toc\">\
		Horrendous Uprisings From The Bottom\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Open Sesame (Part 2)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/at-your-service-mate.html\" class=\"drill-down-toc\">\
		At Your Service, Mate\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/for-whom-the-bell-tolls.html\" class=\"drill-down-toc\">\
		For Whom The Bell Tolls\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/hostage-takers-and-troublemakers.html\" class=\"drill-down-toc\">\
		Hostage Takers And Troublemakers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/complications-complications.html\" class=\"drill-down-toc\">\
		Complications, Complications…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/end-part-1-brother-against-brother.html\" class=\"drill-down-toc\">\
		End Part 1: Brother Against Brother\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/end-part-2-a-violent-fratricide.html\" class=\"drill-down-toc\">\
		End Part 2: A Violent Fratricide\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/end-part-3-unfinished-business.html\" class=\"drill-down-toc\">\
		End Part 3: Unfinished Business\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2/end-part-4-roll-out-the-barrel.html\" class=\"drill-down-toc\">\
		End Part 4: Roll Out The Barrel\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Scenes From a Marriage\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/a-sprawling-estate-shrouded-in-unnatural-fog.html\" class=\"drill-down-toc\">\
		A Sprawling Estate, Shrouded In Unnatural Fog\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/taking-care-of-business.html\" class=\"drill-down-toc\">\
		Taking Care Of Business\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/friends-of-the-house.html\" class=\"drill-down-toc\">\
		Friends Of The House\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/wrath-of-a-woman-scorned.html\" class=\"drill-down-toc\">\
		Wrath Of A Woman Scorned\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/a-eulogy-and-into-the-painted-world.html\" class=\"drill-down-toc\">\
		A Eulogy, And Into The Painted World\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/youre-more-than-a-memory-now.html\" class=\"drill-down-toc\">\
		You’re More Than A Memory Now\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/nightmare-in-red.html\" class=\"drill-down-toc\">\
		Nightmare In Red\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage/i-am-sadness-into-a-dream-of-what-was.html\" class=\"drill-down-toc\">\
		I Am Sadness: Into A Dream Of What Was\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Whatever A Man Soweth…\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/someone-didnt-read-the-small-print.html\" class=\"drill-down-toc\">\
		Someone Didn’t Read The Small Print\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/higher-learning-with-shani.html\" class=\"drill-down-toc\">\
		Higher Learning With Shani\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/i-used-to-be-an-adventurer-like-you.html\" class=\"drill-down-toc\">\
		I Used To Be An Adventurer Like You…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/evil-incarnate.html\" class=\"drill-down-toc\">\
		Evil Incarnate\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/optional-a-fond-farewell-to-shani.html\" class=\"drill-down-toc\">\
		Optional: A Fond Farewell To Shani\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/that-shall-he-also-reap.html\" class=\"drill-down-toc\">\
		…That Shall He Also Reap\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/ending-1-faithful-and-servile-obedience.html\" class=\"drill-down-toc\">\
		Ending #1: Faithful And Servile Obedience\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/ending-2-part-1-some-other-time.html\" class=\"drill-down-toc\">\
		Ending #2: Part 1: Some Other Time\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth/ending-2-part-2-a-heart-of-stone.html\" class=\"drill-down-toc\">\
		Ending #2: Part 2: A Heart Of Stone\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"episode-2-main-quests-blood-and-wine\">\
	<h2>Episode 2: Main Quests: Blood And Wine</h2>\
	<ul>\
		<li>\
			<h3>\
		Envoys, Wineboys\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/envoys-wineboys/the-tyranny-of-bandits.html\" class=\"drill-down-toc\">\
		The Tyranny Of Bandits\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/envoys-wineboys/interlude-by-the-crane-villains-ready-your-arms.html\" class=\"drill-down-toc\">\
		Interlude: By The Crane! Villains, Ready Your Arms!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/envoys-wineboys/message-from-the-duchess.html\" class=\"drill-down-toc\">\
		Message From The Duchess\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Beast of Toussaint\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/all-for-one-and-one-for-all.html\" class=\"drill-down-toc\">\
		All For One, And One For All!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/fishing-for-clues.html\" class=\"drill-down-toc\">\
		Fishing For Clues\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/the-crayfish-chowder-is-off.html\" class=\"drill-down-toc\">\
		The Crayfish Chowder Is Off\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/blood-wine-and-a-bruxa.html\" class=\"drill-down-toc\">\
		Blood, Wine, and a Bruxa\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/gaining-the-upper-hand.html\" class=\"drill-down-toc\">\
		Gaining The Upper Hand\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/love-demands-great-sacrifices.html\" class=\"drill-down-toc\">\
		Love Demands Great Sacrifices\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/honor-wisdom-generosity-valor-compassion-and-murder.html\" class=\"drill-down-toc\">\
		Honor, Wisdom, Generosity, Valor, Compassion, And Murder\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/garden-games.html\" class=\"drill-down-toc\">\
		Garden Games\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint/here-hare-here.html\" class=\"drill-down-toc\">\
		Here, Hare, Here\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Blood Run\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-run/the-beast-is-unleashed.html\" class=\"drill-down-toc\">\
		The Beast Is Unleashed\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-run/a-resurrected-regis.html\" class=\"drill-down-toc\">\
		A Resurrected Regis\
	</a>\
				</li>\
			</ul>\
			<h3>\
		La Cage Au Fou\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/couldve-left-the-door-unlatched.html\" class=\"drill-down-toc\">\
		Could’ve Left The Door Unlatched…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/deductions-decisions-and-decoctions.html\" class=\"drill-down-toc\">\
		Deductions, Decisions, And Decoctions\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/to-the-lair-of-the-cutlery-collector.html\" class=\"drill-down-toc\">\
		To The Lair Of The Cutlery Collector\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/mind-your-manors.html\" class=\"drill-down-toc\">\
		Mind Your Manors\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/the-wight-stuff.html\" class=\"drill-down-toc\">\
		The Wight Stuff\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/resonance-broth-needs-more-blood.html\" class=\"drill-down-toc\">\
		Resonance Broth: Needs More Blood\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/death-hangs-in-the-air.html\" class=\"drill-down-toc\">\
		Death Hangs In The Air\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou/readying-the-resonance.html\" class=\"drill-down-toc\">\
		Readying The Resonance\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Where Children Toil, Toys Waste Away\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/where-children-toil-toys-waste-away/putting-the-boot-in.html\" class=\"drill-down-toc\">\
		Putting The Boot In\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/where-children-toil-toys-waste-away/no-trace-of-the-puppet-at-the-toy-shop.html\" class=\"drill-down-toc\">\
		No Trace Of The Puppet At The Toy Shop\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Is Sacred\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/wine-is-sacred/you-arrived-and-trouble-followed-soon-after.html\" class=\"drill-down-toc\">\
		You Arrived And Trouble Followed Soon After\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/wine-is-sacred/sourcing-the-stolen-sangreal.html\" class=\"drill-down-toc\">\
		Sourcing The Stolen Sangreal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/wine-is-sacred/his-name-is-dog-they-say-he-ploughed-your-mother.html\" class=\"drill-down-toc\">\
		His Name Is Dog. They Say He Ploughed Your Mother.\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Man From Cintra\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra/you-arrived-and-trouble-followed-soon-after.html\" class=\"drill-down-toc\">\
		You Arrived And Trouble Followed Soon After\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra/the-mandragora-infiltration.html\" class=\"drill-down-toc\">\
		The Mandragora Infiltration\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra/optional-an-evening-of-the-arts.html\" class=\"drill-down-toc\">\
		(Optional) An Evening Of The Arts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra/draw-me-like-one-of-your-zerrikanian-girls.html\" class=\"drill-down-toc\">\
		Draw Me Like One Of Your Zerrikanian Girls\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra/bloodstains-on-the-balconies.html\" class=\"drill-down-toc\">\
		Bloodstains On The Balconies\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra/the-heart-of-toussaint.html\" class=\"drill-down-toc\">\
		The Heart Of Toussaint\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Capture The Castle\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/capture-the-castle/assault-on-dun-tynne-meeting-and-beating-roderick.html\" class=\"drill-down-toc\">\
		Assault On Dun Tynne: Meeting And Beating Roderick\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/capture-the-castle/assault-on-dun-tynne-we-thought-you-might-need-a-little-help.html\" class=\"drill-down-toc\">\
		Assault On Dun Tynne: “We Thought You Might Need A Little Help”\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/capture-the-castle/assault-on-dun-tynne-rhenawedd-revealed.html\" class=\"drill-down-toc\">\
		Assault On Dun Tynne: Rhenawedd Revealed\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/capture-the-castle/aftermath-is-anyone-else-here-a-vampire.html\" class=\"drill-down-toc\">\
		Aftermath: Is Anyone Else Here A Vampire?!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Night Of Long Fangs (Part 1)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-night-of-long-fangs-part-1/your-gracevampires.html\" class=\"drill-down-toc\">\
		Your Grace…Vampires!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-night-of-long-fangs-part-1/vampire-and-princess-born-under-the-black-sun.html\" class=\"drill-down-toc\">\
		Vampire And Princess: Born Under The Black Sun\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-night-of-long-fangs-part-1/path-to-the-sistermaking-a-withdrawl-at-the-bank.html\" class=\"drill-down-toc\">\
		Path to the Sister: Making a Withdrawl at the Bank\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-night-of-long-fangs-part-1/path-to-the-sister-prelude-to-playtime.html\" class=\"drill-down-toc\">\
		Path to the Sister: Prelude to Playtime\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-night-of-long-fangs-part-1/path-to-the-unseen-off-to-oriannas-orphanage.html\" class=\"drill-down-toc\">\
		Path To The Unseen: Off To Orianna’s Orphanage\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Blood Simple\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-simple/a-weakness-for-children.html\" class=\"drill-down-toc\">\
		A Weakness For Children\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-simple/ever-fight-a-witcher-you-piece-of-st.html\" class=\"drill-down-toc\">\
		“Ever Fight A Witcher, You Piece Of S#!T?”\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-simple/a-larder-of-blood.html\" class=\"drill-down-toc\">\
		A Larder Of Blood\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-simple/slipping-a-word-to-the-birds.html\" class=\"drill-down-toc\">\
		Slipping a Word to the Birds\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Night Of The Long Fangs (Part 2)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/night-of-the-long-fangs-part-2/path-to-the-sister-playtime-is-over.html\" class=\"drill-down-toc\">\
		Path to the Sister: Playtime Is Over\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Beyond Hill And Dale…\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale/required-reading-into-the-fablesphere-expecto-ludum.html\" class=\"drill-down-toc\">\
		Required Reading: Into The Fablesphere: “Expecto Ludum!”\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale/follow-the-rainbow-over-the-stream-follow-the-girl-who-follows-a-dream.html\" class=\"drill-down-toc\">\
		Follow The Rainbow Over The Stream. Follow The Girl Who Follows A Dream.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale/no-wolves-here-none-at-all.html\" class=\"drill-down-toc\">\
		No Wolves Here! None At All!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale/frolicking-in-the-fablesphere.html\" class=\"drill-down-toc\">\
		Frolicking In The Fablesphere\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Duck, Duck, Goosed!\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/contract-duck-duck-goosed/fowl-play-is-suspected.html\" class=\"drill-down-toc\">\
		Fowl Play Is Suspected\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Beyond Hill And Dale… (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale-cont/fee-fi-fo-fum-fight.html\" class=\"drill-down-toc\">\
		Fee-Fi-Fo-Fum-Fight!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale-cont/and-they-all-lived-happily-ever-after.html\" class=\"drill-down-toc\">\
		And They All Lived Happily Ever After…\
	</a>\
				</li>\
			</ul>\
			<h3>\
		What Lies Unseen\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/what-lies-unseen/path-to-the-unseenan-audience-with-the-unseen.html\" class=\"drill-down-toc\">\
		Path To The Unseen:an Audience With The Unseen\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/what-lies-unseen/elders-and-betters-getting-it-in-the-neck.html\" class=\"drill-down-toc\">\
		Elders And Betters: Getting It In The Neck\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/what-lies-unseen/onwards-and-upwards.html\" class=\"drill-down-toc\">\
		Onwards And Upwards\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/what-lies-unseen/understanding-the-gravity-of-the-situation.html\" class=\"drill-down-toc\">\
		Understanding The Gravity Of The Situation\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/what-lies-unseen/elders-and-betters-a-concise-conversation.html\" class=\"drill-down-toc\">\
		Elders And Betters: A Concise Conversation\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Tesham Mutna\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/tesham-mutna/mayhem-at-tesham-mutna.html\" class=\"drill-down-toc\">\
		Mayhem At Tesham Mutna\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Burlap Is The New Stripe\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/ive-already-got-it-all.html\" class=\"drill-down-toc\">\
		I’ve Already Got It All\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/dirty-laundry.html\" class=\"drill-down-toc\">\
		Dirty Laundry\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/guardian-of-the-guttersnipes-locked-in-the-clink.html\" class=\"drill-down-toc\">\
		Guardian Of The Guttersnipes, Locked In The Clink\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/there-are-different-kinds-of-exits.html\" class=\"drill-down-toc\">\
		There Are Different Kinds Of Exits\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/a-regular-master-of-diplomacy.html\" class=\"drill-down-toc\">\
		A Regular Master Of Diplomacy\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/boots-should-be-as-clean-as-the-souls-that-wear-them.html\" class=\"drill-down-toc\">\
		Boots Should Be As Clean As The Souls That Wear Them\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/answers-then-soup-then-drink.html\" class=\"drill-down-toc\">\
		Answers. Then Soup. Then Drink!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/interlude-a-dirty-lie-vile-slander.html\" class=\"drill-down-toc\">\
		Interlude: A Dirty Lie! Vile Slander!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe/epilogue-recollections-at-the-cemetery.html\" class=\"drill-down-toc\">\
		Epilogue: Recollections At The Cemetery\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quest: The Perks Of Being A Jailbird\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/secondary-quest-the-perks-of-being-a-jailbird/searching-the-secret-stash.html\" class=\"drill-down-toc\">\
		Searching The Secret Stash\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/secondary-quest-the-perks-of-being-a-jailbird/something-to-hang-on-your-wall.html\" class=\"drill-down-toc\">\
		Something To Hang On Your Wall\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Pomp And Strange Circumstance\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/covering-deficiencies-in-beauty-never-in-refinement.html\" class=\"drill-down-toc\">\
		Covering Deficiencies In Beauty, Never In Refinement\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/boots-should-be-as-clean-as-the-souls-that-wear-them.html\" class=\"drill-down-toc\">\
		Boots Should Be As Clean As The Souls That Wear Them\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/answers-then-soup-then-drink.html\" class=\"drill-down-toc\">\
		Answers. Then Soup. Then Drink!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/youre-simply-a-compulsive-snoop.html\" class=\"drill-down-toc\">\
		You’re Simply A Compulsive Snoop!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/saving-face-with-captain-damien.html\" class=\"drill-down-toc\">\
		Saving Face With Captain Damien\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/the-ceremony-begins-order-and-disorder.html\" class=\"drill-down-toc\">\
		The Ceremony Begins: Order And Disorder\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance/epilogue-reflections-at-the-cemetery.html\" class=\"drill-down-toc\">\
		Epilogue: Reflections At The Cemetery\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Be It Ever So Humble\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/be-it-ever-so-humble/aging-well-at-the-corvo-bianco.html\" class=\"drill-down-toc\">\
		Aging Well At The Corvo Bianco\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"secondary-quests\">\
	<h2>Secondary Quests</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/secondary-quests/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/secondary-quests/available-quests.html\">\
				Available Quests\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/secondary-quests/secondary-quests-chart.html\">\
				Secondary Quests Chart\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Missing In Action\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/missing-in-action/a-blind-man-leading-a-cripple.html\" class=\"drill-down-toc\">\
		A Blind Man Leading A Cripple\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Precious Cargo\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/precious-cargo/a-mediocre-merchant.html\" class=\"drill-down-toc\">\
		A Mediocre Merchant\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/precious-cargo/a-better-bowman.html\" class=\"drill-down-toc\">\
		A Better Bowman\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Frying Pan, Spick And Span\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-frying-pan-spick-and-span/find-a-pan-for-dear-old-gran.html\" class=\"drill-down-toc\">\
		Find A Pan For Dear Old Gran\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Twisted Firestarter\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/twisted-firestarter/a-punking-instigator.html\" class=\"drill-down-toc\">\
		A Punking Instigator\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/twisted-firestarter/fear-addicted-danger-illustrated.html\" class=\"drill-down-toc\">\
		Fear Addicted, Danger Illustrated\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Faithful Friend\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/faithful-friend/galloping-gulden.html\" class=\"drill-down-toc\">\
		Galloping Gulden\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Deadly Crossing (I)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/deadly-crossing-i/mind-the-gaps-troll-bridge-toll.html\" class=\"drill-down-toc\">\
		Mind The Gaps: Troll Bridge Toll\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Defender Of The Faith (I)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/defender-of-the-faith-i/blasphemers-should-all-be-flogged.html\" class=\"drill-down-toc\">\
		Blasphemers! Should All Be Flogged!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Face Me If You Dare!*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/face-me-if-you-dare/ronvid-of-the-small-brain.html\" class=\"drill-down-toc\">\
		Ronvid Of The Small Brain\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Forefather’s Eve\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/forefathers-eve/a-man-who-fears-no-evil-the-pellar-needs.html\" class=\"drill-down-toc\">\
		A Man Who Fears No Evil, The Pellar Needs…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/forefathers-eve/no-toleration-for-necromancy.html\" class=\"drill-down-toc\">\
		No Toleration For Necromancy\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/forefathers-eve/all-is-gloom-what-beings-in-the-darkess-loom.html\" class=\"drill-down-toc\">\
		All Is Gloom. What Beings In The Darkess Loom?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/forefathers-eve/quest-conclusion-forefathers-grieve.html\" class=\"drill-down-toc\">\
		Quest Conclusion: Forefather’s Grieve\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Highway Robbery*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/highway-robbery/troublesome-thuggery.html\" class=\"drill-down-toc\">\
		Troublesome Thuggery\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Last Rites\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/last-rites/laying-an-old-spirit-to-rest.html\" class=\"drill-down-toc\">\
		Laying An Old Spirit To Rest\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Looters (I)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/looters-i/these-peasants-are-revolting.html\" class=\"drill-down-toc\">\
		These Peasants Are Revolting\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Master Armorers\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/master-armorers/nonsense-skellige-legends.html\" class=\"drill-down-toc\">\
		Nonsense Skellige Legends\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/master-armorers/tools-of-the-tordarroch-clan.html\" class=\"drill-down-toc\">\
		Tools Of The Tordarroch Clan\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/master-armorers/c-king-up-simple-bungs.html\" class=\"drill-down-toc\">\
		C--King Up Simple Bungs\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Components For An Armorer\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/contract-components-for-an-armorer/accessing-archgriffin-acid.html\" class=\"drill-down-toc\">\
		Accessing Archgriffin Acid\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Master Armorers (Continued)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/master-armorers-continued/yoanas-best-plate.html\" class=\"drill-down-toc\">\
		Yoana’s Best Plate\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Where The Cat And Wolf Play…\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/where-the-cat-and-wolf-play/no-honor-in-honorton.html\" class=\"drill-down-toc\">\
		No Honor In Honorton\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/where-the-cat-and-wolf-play/short-changing-the-bad-man.html\" class=\"drill-down-toc\">\
		Short-Changing The Bad Man\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/where-the-cat-and-wolf-play/twelve-crowns-buys-you-a-massacre.html\" class=\"drill-down-toc\">\
		Twelve Crowns Buys You A Massacre\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Secondary Quests: Take What You Want\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/secondary-quests-take-what-you-want/teigr-teigr-burning-bright.html\" class=\"drill-down-toc\">\
		Teigr, Teigr, Burning Bright\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wild At Heart\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wild-at-heart/a-bleak-lookout-in-blackbough.html\" class=\"drill-down-toc\">\
		A Bleak Lookout In Blackbough\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wild-at-heart/torn-to-pieces.html\" class=\"drill-down-toc\">\
		Torn To Pieces\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wild-at-heart/end-a-lycanthropeless-romantic.html\" class=\"drill-down-toc\">\
		End: A Lycanthropeless Romantic\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Harassing A Troll*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/harassing-a-troll/bothering-boris-zoup-ala-corpse.html\" class=\"drill-down-toc\">\
		Bothering Boris: Zoup-Ala-Corpse\
	</a>\
				</li>\
			</ul>\
			<h3>\
		At The Mercy Of Strangers*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/at-the-mercy-of-strangers/at-the-lunch-of-drowners.html\" class=\"drill-down-toc\">\
		At The Lunch Of Drowners\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bitter Harvest\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/bitter-harvest/a-ghoulish-gathering.html\" class=\"drill-down-toc\">\
		A Ghoulish Gathering\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Caravan Attack*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/caravan-attack/by-the-gods-help-me.html\" class=\"drill-down-toc\">\
		By The Gods, Help Me!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Deadly Crossing (II)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/deadly-crossing-ii/mind-the-gaps-bridge-looters.html\" class=\"drill-down-toc\">\
		Mind The Gaps: Bridge Looters\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Death By Fire\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/death-by-fire/cahbri-le-help.html\" class=\"drill-down-toc\">\
		Ca’hbri Le! Help!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Fake Papers\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/fake-papers/a-little-bit-of-paperwork.html\" class=\"drill-down-toc\">\
		A Little Bit Of Paperwork\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Funeral Pyres\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/funeral-pyres/burning-the-dead-of-mulbrydale.html\" class=\"drill-down-toc\">\
		Burning The Dead Of Mulbrydale\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Looters (II)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/looters-ii/ghoulish-gatherers.html\" class=\"drill-down-toc\">\
		Ghoulish Gatherers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Man’s Best Friend*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/mans-best-friend/canine-cuisine.html\" class=\"drill-down-toc\">\
		Canine Cuisine\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Thou Shalt Not Pass\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/thou-shalt-not-pass/king-radovids-seal.html\" class=\"drill-down-toc\">\
		King Radovid’s Seal\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Volunteer\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-volunteer/singing-a-happy-tune.html\" class=\"drill-down-toc\">\
		Singing A Happy Tune\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Fool’s Gold\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/fools-gold/going-the-whole-hog.html\" class=\"drill-down-toc\">\
		Going The Whole Hog\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/fools-gold/i-think-therefore-i-ham.html\" class=\"drill-down-toc\">\
		I Think, Therefore I Ham\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/fools-gold/bringing-home-the-bacon.html\" class=\"drill-down-toc\">\
		Bringing Home The Bacon\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Hazardous Goods\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/hazardous-goods/gert-borels-going-to-get-boils.html\" class=\"drill-down-toc\">\
		Gert Borel’s Going To Get Boils\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Witcher Wannabe\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/witcher-wannabe/the-liar-of-lindenvale.html\" class=\"drill-down-toc\">\
		The Liar Of Lindenvale\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Looters (III)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/looters-iii/these-peasants-are-revolting.html\" class=\"drill-down-toc\">\
		These Peasants Are Revolting\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Truth Is In The Stars\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-truth-is-in-the-stars/an-old-coot-needs-a-rare-root.html\" class=\"drill-down-toc\">\
		An Old Coot Needs A Rare Root\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Lynch Mob\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/lynch-mob/murder-at-the-crossroads.html\" class=\"drill-down-toc\">\
		Murder At The Crossroads\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Love’s Cruel Snares?\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/loves-cruel-snares/lament-of-the-weeping-woman.html\" class=\"drill-down-toc\">\
		Lament Of The Weeping Woman\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Dog’s Life\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-dogs-life/not-just-a-mangy-mutt.html\" class=\"drill-down-toc\">\
		Not Just A Mangy Mutt\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Defender Of The Faith (II)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/defender-of-the-faith-ii/blasphemers-should-all-be-flogged.html\" class=\"drill-down-toc\">\
		Blasphemers! Should All Be Flogged!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Highwayman’s Cache*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/highwaymans-cache/to-pass-you-pay.html\" class=\"drill-down-toc\">\
		To Pass, You Pay\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Greedy God\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-greedy-god/oratory-not-omnipotent.html\" class=\"drill-down-toc\">\
		Oratory, Not Omnipotent\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Blood Ties\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/blood-ties/hunting-for-hrodeberth.html\" class=\"drill-down-toc\">\
		Hunting For Hrodeberth\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/blood-ties/harried-hounded-and-hung.html\" class=\"drill-down-toc\">\
		Harried, Hounded, And Hung\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Deadly Crossing (III)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/deadly-crossing-iii/mind-the-gaps-forest-fellows.html\" class=\"drill-down-toc\">\
		Mind The Gaps: Forest Fellows\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Dwarven Document Dilemma\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-dwarven-document-dilemma/lies-got-wee-legs-and-dont-run-far.html\" class=\"drill-down-toc\">\
		Lies Got Wee Legs And Don’t Run Far\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Following The Thread\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/following-the-thread/bits-and-pieces.html\" class=\"drill-down-toc\">\
		Bits And Pieces\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/following-the-thread/lamberts-lesser-vampire.html\" class=\"drill-down-toc\">\
		Lambert’s Lesser Vampire\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/following-the-thread/a-hot-head-and-cold-steel.html\" class=\"drill-down-toc\">\
		A Hot Head And Cold Steel\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/following-the-thread/vengeance-on-faroe.html\" class=\"drill-down-toc\">\
		Vengeance On Faroe\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/following-the-thread/end-an-optional-assassination.html\" class=\"drill-down-toc\">\
		End: An Optional Assassination\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Karmic Justice*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/karmic-justice/scoia-and-tell.html\" class=\"drill-down-toc\">\
		Scoia And Tell\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Witch Hunter Raids*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/witch-hunter-raids/addling-minds-with-magic.html\" class=\"drill-down-toc\">\
		Addling Minds With Magic\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Feast For Crows\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-feast-for-crows/uncovering-derrick-the-dead.html\" class=\"drill-down-toc\">\
		Uncovering Derrick The Dead\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Flame Of Hatred*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-flame-of-hatred/preaching-on-a-plinth.html\" class=\"drill-down-toc\">\
		Preaching On A Plinth\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Message From An Old Friend\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/message-from-an-old-friend/the-musty-smell-of-parchment-and-leather.html\" class=\"drill-down-toc\">\
		The Musty Smell Of Parchment And Leather\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Of Swords And Dumplings\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-swords-and-dumplings/kneading-dough-not-forging-steel.html\" class=\"drill-down-toc\">\
		Kneading Dough, Not Forging Steel\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-swords-and-dumplings/sukrus-causing-a-ruckus.html\" class=\"drill-down-toc\">\
		Sukrus Causing A Ruckus\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-swords-and-dumplings/too-much-greed-about-the-mead.html\" class=\"drill-down-toc\">\
		Too Much Greed About The Mead\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-swords-and-dumplings/crafting-a-plan.html\" class=\"drill-down-toc\">\
		Crafting A Plan\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Racists of Novigrad (I and II)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/racists-of-novigrad-i-and-ii/elf-service.html\" class=\"drill-down-toc\">\
		Elf Service\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Suspicious Shakedown*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/suspicious-shakedown/a-light-stroll-down-a-dark-alley.html\" class=\"drill-down-toc\">\
		A Light Stroll Down A Dark Alley\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Black Pearl\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/black-pearl/a-plan-crazier-than-it-is-sane.html\" class=\"drill-down-toc\">\
		A Plan Crazier Than It Is Sane\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/black-pearl/the-nidas-touch.html\" class=\"drill-down-toc\">\
		The Nidas Touch\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Drunken Rabble*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/drunken-rabble/poor-mans-always-got-it-uphill.html\" class=\"drill-down-toc\">\
		Poor Man’s Always Got It Uphill\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Hey, You Wanna Look At My Stuff?\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/hey-you-wanna-look-at-my-stuff/everything-is-half-off.html\" class=\"drill-down-toc\">\
		Everything Is Half Off\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Strumpet In Distress*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/strumpet-in-distress/hoes-before-foes.html\" class=\"drill-down-toc\">\
		Hoes Before Foes\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Out On Your Arse!\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/out-on-your-arse/whores-and-hooligans.html\" class=\"drill-down-toc\">\
		Whores And Hooligans\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Walk On The Waterfront\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-walk-on-the-waterfront/a-dandy-out-of-his-depth.html\" class=\"drill-down-toc\">\
		A Dandy Out Of His Depth\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Warehouse Of Woe\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/warehouse-of-woe/trading-insults-down-on-the-docks.html\" class=\"drill-down-toc\">\
		Trading Insults Down On The Docks\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Of Dairy And Darkness\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-dairy-and-darkness/aeramas-was-a-big-cheese-in-these-parts.html\" class=\"drill-down-toc\">\
		Aeramas Was A Big Cheese In These Parts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-dairy-and-darkness/trial-of-the-tyromancer-cheesed-off.html\" class=\"drill-down-toc\">\
		Trial Of The Tyromancer: Cheesed Off\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Fencing Lessons\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/fencing-lessons/a-stroll-by-traitors-gate.html\" class=\"drill-down-toc\">\
		A Stroll By Traitor’s Gate\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/fencing-lessons/supercilious-swordplay.html\" class=\"drill-down-toc\">\
		Supercilious Swordplay\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Hidden Messages Of The Nilfgaardian Kind\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/hidden-messages-of-the-nilfgaardian-kind/the-stash-at-the-archway.html\" class=\"drill-down-toc\">\
		The Stash At The Archway\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/hidden-messages-of-the-nilfgaardian-kind/the-stash-at-crippled-kates.html\" class=\"drill-down-toc\">\
		The Stash At Crippled Kate’s\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Never Trust Children (I)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/never-trust-children-i/you-gray-git.html\" class=\"drill-down-toc\">\
		You Gray Git!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Nobleman Statuette\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-nobleman-statuette/yn-allan-daonna-ar-ais.html\" class=\"drill-down-toc\">\
		Yn All’an Daonna Ar Ais…!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Soldier Statuette\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-soldier-statuette/yn-allan-daonna-ar-ais-again.html\" class=\"drill-down-toc\">\
		Yn All’an Daonna Ar Ais… (Again)!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Tome Entombed\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-tome-entombed/a-grave-discovery.html\" class=\"drill-down-toc\">\
		A Grave Discovery\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Barnful Of Trouble\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-barnful-of-trouble/ghoulish-goings-onfilth-flaying-for-quick-cash.html\" class=\"drill-down-toc\">\
		Ghoulish Goings On:filth Flaying For Quick Cash\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Empty Coop\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/empty-coop/an-angry-old-coot-and-a-two-legged-wolf.html\" class=\"drill-down-toc\">\
		An Angry Old Coot And A Two-Legged Wolf\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Little Red\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/little-red/slaughter-amongst-the-sunflowers.html\" class=\"drill-down-toc\">\
		Slaughter Amongst The Sunflowers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Novigrad Hospitality\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/novigrad-hospitality/sit-a-spell.html\" class=\"drill-down-toc\">\
		Sit, A Spell\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Spooked Mare\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/spooked-mare/a-peasants-plea.html\" class=\"drill-down-toc\">\
		A Peasant’s Plea\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/spooked-mare/nothing-here-for-you-vattghern.html\" class=\"drill-down-toc\">\
		Nothing Here For You, Vatt’ghern\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Strangers In The Night*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/strangers-in-the-night/exchanging-glances.html\" class=\"drill-down-toc\">\
		Exchanging Glances\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Warm Welcome*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-warm-welcome/novigrad-or-death.html\" class=\"drill-down-toc\">\
		Novigrad Or Death\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Avid Collector (Hearts of Stone)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/avid-collector-hos/preamble-a-sensitive-appreciation-of-beauty-and-the-arts.html\" class=\"drill-down-toc\">\
		Preamble: A Sensitive Appreciation Of Beauty And The Arts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/avid-collector-hos/selling-to-the-son-of-roger.html\" class=\"drill-down-toc\">\
		Selling To The Son Of Roger\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Enchanting: Start-Up Costs (Hearts of Stone)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/enchanting-start-up-costs-hos/a-runewright-upon-your-shores-has-landed.html\" class=\"drill-down-toc\">\
		A Runewright Upon Your Shores Has Landed\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Enchanting: Quality Has Its Price (Hearts of Stone)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/enchanting-quality-has-its-price-hos/a-jade-stone-of-size-substantial.html\" class=\"drill-down-toc\">\
		A Jade Stone Of Size Substantial\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/enchanting-quality-has-its-price-hos/getting-jaded.html\" class=\"drill-down-toc\">\
		Getting Jaded\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/enchanting-quality-has-its-price-hos/some-enchanting-evening.html\" class=\"drill-down-toc\">\
		Some Enchanting Evening\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Rose on a Red Field (Hearts of Stone)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/rose-on-a-red-field-hos/hey-you-puss-peepers.html\" class=\"drill-down-toc\">\
		Hey You! Puss Peepers!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/rose-on-a-red-field-hos/clues-to-kluivert.html\" class=\"drill-down-toc\">\
		Clues To Kluivert\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/rose-on-a-red-field-hos/felling-the-fallen-knights.html\" class=\"drill-down-toc\">\
		Felling The Fallen Knights\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/rose-on-a-red-field-hos/broken-oaths-and-wilted-roses.html\" class=\"drill-down-toc\">\
		Broken Oaths And Wilted Roses\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/rose-on-a-red-field-hos/end-an-ounce-of-panache.html\" class=\"drill-down-toc\">\
		End: An Ounce Of Panache\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Price Of Passage*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-price-of-passage/the-redarian-coin-con.html\" class=\"drill-down-toc\">\
		The Redarian Coin Con\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Most Truest Of Basilisks*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-most-truest-of-basilisks/a-real-favellian-wyvern.html\" class=\"drill-down-toc\">\
		A Real Favellian Wyvern\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Rough Neighborhood\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/rough-neighborhood/rough-and-tumble.html\" class=\"drill-down-toc\">\
		Rough And Tumble\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Taxman Cometh (Hearts of Stone)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-taxman-cometh-hos/be-thankful-i-dont-take-it-all.html\" class=\"drill-down-toc\">\
		Be Thankful I Don’t Take It All\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-taxman-cometh-hos/end-1-the-taxman-giveth.html\" class=\"drill-down-toc\">\
		End #1: The Taxman Giveth\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-taxman-cometh-hos/end-2-the-taxman-taketh-away.html\" class=\"drill-down-toc\">\
		End #2: The Taxman Taketh Away\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Without A Trace (Hearts of Stone)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/without-a-trace-hos/gone-but-not-forgotten.html\" class=\"drill-down-toc\">\
		Gone But Not Forgotten\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/without-a-trace-hos/whats-brought-you-to-these-parts-master-lost-your-way.html\" class=\"drill-down-toc\">\
		What’s Brought You To These Parts, Master? Lost Your Way?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/without-a-trace-hos/addendum-a-little-off-the-bone.html\" class=\"drill-down-toc\">\
		Addendum: A Little Off The Bone\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Abandoned Sawmill\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/abandoned-sawmill/the-lurking-leshen.html\" class=\"drill-down-toc\">\
		The Lurking Leshen\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Armed Assault\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/armed-assault/no-solicitors.html\" class=\"drill-down-toc\">\
		No Solicitors\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Bard’s Beloved\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-bards-beloved/looking-for-love-in-all-the-wrong-places.html\" class=\"drill-down-toc\">\
		Looking For Love In All The Wrong Places\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Brave Fools Die Young\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/brave-fools-die-young/make-petter-feel-better.html\" class=\"drill-down-toc\">\
		Make Petter Feel Better\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Call Of The Wild*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/call-of-the-wild/a-hairy-situation.html\" class=\"drill-down-toc\">\
		A Hairy Situation\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Crime And Punishment\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/crime-and-punishment/dirty-lies-from-a-little-sister.html\" class=\"drill-down-toc\">\
		Dirty Lies From A Little Sister\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Family Blade\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-family-blade/assault-at-the-obelisk.html\" class=\"drill-down-toc\">\
		Assault At The Obelisk\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-family-blade/the-call-of-kuliu.html\" class=\"drill-down-toc\">\
		The Call Of Kuliu\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Farting Trolls*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/farting-trolls/breaking-wind-and-rocks.html\" class=\"drill-down-toc\">\
		Breaking Wind And Rocks\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Finders Keepers\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/finders-keepers/dipping-your-toes.html\" class=\"drill-down-toc\">\
		Dipping Your Toes\
	</a>\
				</li>\
			</ul>\
			<h3>\
		From A Land Far, Far Away\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/from-a-land-far-far-away/irwif-indod-o-ifi-chiast.html\" class=\"drill-down-toc\">\
		Irwif Indod O Ifi, Chiast!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/from-a-land-far-far-away/nidydych-inei-gael.html\" class=\"drill-down-toc\">\
		Nidydych Inei Gael!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Hallowed Horn\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-hallowed-horn/assault-at-another-obelisk.html\" class=\"drill-down-toc\">\
		Assault At Another Obelisk\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Hard Times\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/hard-times/an-eye-for-the-main-chance.html\" class=\"drill-down-toc\">\
		An Eye For The Main Chance\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/hard-times/end-yannes-lament.html\" class=\"drill-down-toc\">\
		End: Yanne’s Lament\
	</a>\
				</li>\
			</ul>\
			<h3>\
		In The Heart Of The Woods\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-the-heart-of-the-woods/getting-to-the-root-of-the-problem.html\" class=\"drill-down-toc\">\
		Getting To The Root Of The Problem\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-the-heart-of-the-woods/the-sacred-and-the-profane.html\" class=\"drill-down-toc\">\
		The Sacred And The Profane\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-the-heart-of-the-woods/for-history-and-harald-harvesting-hearts-from-the-woods.html\" class=\"drill-down-toc\">\
		For History And Harald: Harvesting Hearts From The Woods\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-the-heart-of-the-woods/stepping-forward-with-sven-snuffing-out-the-woodland-spirit.html\" class=\"drill-down-toc\">\
		Stepping Forward With Sven: Snuffing Out The Woodland Spirit\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Never Trust Children (II)*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/never-trust-children-ii/a-likely-lad.html\" class=\"drill-down-toc\">\
		A Likely Lad\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Nithing\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-nithing/nithing-to-see-here.html\" class=\"drill-down-toc\">\
		Nithing To See Here\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-nithing/end-sowing-his-seed-with-the-herbalist-hussy.html\" class=\"drill-down-toc\">\
		End: Sowing His Seed With The Herbalist Hussy\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Peace Disturbed\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/peace-disturbed/tomb-raider.html\" class=\"drill-down-toc\">\
		Tomb Raider\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Practicum In Advanced Alchemy\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/practicum-in-advanced-alchemy/gremist-the-venerable-alchemist.html\" class=\"drill-down-toc\">\
		Gremist The Venerable Alchemist\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/practicum-in-advanced-alchemy/first-favor-the-harlots-pimpernel.html\" class=\"drill-down-toc\">\
		First Favor: The Harlot’s Pimpernel\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/practicum-in-advanced-alchemy/second-favor-thats-the-spirit.html\" class=\"drill-down-toc\">\
		Second Favor: That’s The Spirit\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/practicum-in-advanced-alchemy/third-favor-fritjof-is-feeling-parched.html\" class=\"drill-down-toc\">\
		Third Favor: Fritjof Is Feeling Parched\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Sad Tale Of The Grossbart Brothers\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-sad-tale-of-the-grossbart-brothers/i-am-the-best-always-was.html\" class=\"drill-down-toc\">\
		I Am The Best. Always Was.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-sad-tale-of-the-grossbart-brothers/end-witcher-there-can-be-no-mistakes-this-time.html\" class=\"drill-down-toc\">\
		End: Witcher, There Can Be No Mistakes This Time!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Shock Therapy\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/shock-therapy/violence-is-golden.html\" class=\"drill-down-toc\">\
		Violence Is Golden\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Siren’s Call*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/sirens-call/tending-to-the-flock.html\" class=\"drill-down-toc\">\
		Tending To The Flock\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Stranger In A Strange Land\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/stranger-in-a-strange-land/cut-down-by-some-miserable-s-ts.html\" class=\"drill-down-toc\">\
		Cut Down By Some Miserable S--Ts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/stranger-in-a-strange-land/the-very-devil-we-speak-of.html\" class=\"drill-down-toc\">\
		The Very Devil We Speak Of\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Cave Of Dreams\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-cave-of-dreams/a-motley-crew.html\" class=\"drill-down-toc\">\
		A Motley Crew\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-cave-of-dreams/the-stuff-of-nightmares.html\" class=\"drill-down-toc\">\
		The Stuff Of Nightmares\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-cave-of-dreams/end-blueboys-buddy.html\" class=\"drill-down-toc\">\
		End: Blueboy’s Buddy\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Taken As A Lass\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/taken-as-a-lass/glory-to-all-heroes.html\" class=\"drill-down-toc\">\
		Glory To All Heroes!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		An Unpaid Debt\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/an-unpaid-debt/secretive-simun.html\" class=\"drill-down-toc\">\
		Secretive Simun\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Woe Is Me*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/woe-is-me/the-woeful-man-the-lying-man.html\" class=\"drill-down-toc\">\
		The Woeful Man: The Lying Man\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Worthy Of Trust\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/worthy-of-trust/will-you-help-a-man-in-need.html\" class=\"drill-down-toc\">\
		Will You Help A Man In Need?\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Yustianna Disturbed*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/yustianna-disturbed/ventured-too-far-white-haired-stray.html\" class=\"drill-down-toc\">\
		Ventured Too Far, White-Haired Stray\
	</a>\
				</li>\
			</ul>\
			<h3>\
		For Fame And Glory\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/for-fame-and-glory/swift-hands-and-sharp-eyes-lead-us.html\" class=\"drill-down-toc\">\
		Swift Hands And Sharp Eyes! Lead Us.\
	</a>\
				</li>\
			</ul>\
			<h3>\
		In Wolf’s Clothing\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-wolfs-clothing/fresh-graves-and-razed-huts.html\" class=\"drill-down-toc\">\
		Fresh Graves And Razed Huts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-wolfs-clothing/craven-some-werewolf-combat.html\" class=\"drill-down-toc\">\
		Craven Some Werewolf Combat\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-wolfs-clothing/overcoming-an-undying-lycanthrope.html\" class=\"drill-down-toc\">\
		Overcoming An Undying Lycanthrope\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-wolfs-clothing/ramunds-assistance.html\" class=\"drill-down-toc\">\
		Ramund’s Assistance\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-wolfs-clothing/the-cursed-fang-of-torador.html\" class=\"drill-down-toc\">\
		The Cursed Fang Of Torador\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/in-wolfs-clothing/end-cursed-flesh-and-flying-fur.html\" class=\"drill-down-toc\">\
		End: Cursed Flesh And Flying Fur\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Master Of The Arena\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/master-of-the-arena/the-arena-of-ulle-the-unlucky.html\" class=\"drill-down-toc\">\
		The Arena Of Ulle The Unlucky\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Free Spirit\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/free-spirit/the-island-atheist.html\" class=\"drill-down-toc\">\
		The Island Atheist\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/free-spirit/tome-raider-heathen-book-gathering.html\" class=\"drill-down-toc\">\
		Tome Raider: Heathen Book Gathering\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Path Of Warriors\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-path-of-warriors/two-trials-on-this-tiny-isle.html\" class=\"drill-down-toc\">\
		Two Trials On This Tiny Isle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-path-of-warriors/trial-of-dexterity-a-mad-dash-to-the-mountain-top.html\" class=\"drill-down-toc\">\
		Trial Of Dexterity: A Mad Dash To The Mountain Top\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-path-of-warriors/trial-of-conviction-a-breath-taking-journey-underground.html\" class=\"drill-down-toc\">\
		Trial Of Conviction: A Breath-Taking Journey Underground\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Tower Outta Nowheres\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-tower-outta-nowheres/thunder-and-lightning-very-very-frightening.html\" class=\"drill-down-toc\">\
		Thunder And Lightning, Very Very Frightening\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-tower-outta-nowheres/tower-and-relative-dimensions-in-situ.html\" class=\"drill-down-toc\">\
		Tower And Relative Dimensions In Situ\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-tower-outta-nowheres/disturbing-indications-of-freedom.html\" class=\"drill-down-toc\">\
		Disturbing Indications Of Freedom\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-tower-outta-nowheres/end-aburraghi-varathern.html\" class=\"drill-down-toc\">\
		End: Aburraghi V’arathern…\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Flesh For Sale\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/flesh-for-sale/slave-driving-a-hard-bargain.html\" class=\"drill-down-toc\">\
		Slave-Driving A Hard Bargain\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/flesh-for-sale/quest-conclusion-1-death-to-the-degenerate-dagr.html\" class=\"drill-down-toc\">\
		Quest Conclusion #1: Death To The Degenerate Dagr!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/flesh-for-sale/quest-conclusion-2-indebted-not-indentured.html\" class=\"drill-down-toc\">\
		Quest Conclusion #2: Indebted, Not Indentured\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Four Faces Of Hemdall*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-four-faces-of-hemdall/a-wanderer-with-a-purpose.html\" class=\"drill-down-toc\">\
		A Wanderer With A Purpose\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Iron Maiden\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/iron-maiden/run-to-the-hills.html\" class=\"drill-down-toc\">\
		Run To The Hills\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/iron-maiden/be-quick-or-be-dead.html\" class=\"drill-down-toc\">\
		Be Quick Or Be Dead\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Price Of Honor\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-price-of-honor/blue-and-bloated.html\" class=\"drill-down-toc\">\
		Blue And Bloated\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bastion\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/bastion/old-bones-of-a-young-child.html\" class=\"drill-down-toc\">\
		Old Bones Of A Young Child\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Berengar’s Blade\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/berengars-blade/the-tale-of-torhaerne.html\" class=\"drill-down-toc\">\
		The Tale Of Tor’haerne\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Greenhouse Effect\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/greenhouse-effect/strange-monoliths-and-rusty-sickles.html\" class=\"drill-down-toc\">\
		Strange Monoliths And Rusty Sickles\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Monster Slayer\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/monster-slayer/post-mortem.html\" class=\"drill-down-toc\">\
		Post Mortem\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Trail Of Echoes*\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/trail-of-echoes/sad-memories.html\" class=\"drill-down-toc\">\
		Sad Memories\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Witchers’ Forge\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-witchers-forge/marginalia-and-the-old-mines.html\" class=\"drill-down-toc\">\
		Marginalia And The Old Mines\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Hunger Game (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-hunger-game-baw/you-always-have-warm-food-awaiting-your-return.html\" class=\"drill-down-toc\">\
		You Always Have Warm Food Awaiting Your Return\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-hunger-game-baw/roll-out-the-barrel.html\" class=\"drill-down-toc\">\
		Roll Out The Barrel\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Knight’s Tales (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-knights-tales-baw/a-site-of-sorcery-the-weeping-willow.html\" class=\"drill-down-toc\">\
		A Site Of Sorcery: The Weeping Willow\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-knights-tales-baw/none-but-feral-cats-stray-here.html\" class=\"drill-down-toc\">\
		None But Feral Cats Stray Here\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-knights-tales-baw/overcoming-the-power-of-love-and-longing.html\" class=\"drill-down-toc\">\
		Overcoming The Power Of Love And Longing\
	</a>\
				</li>\
			</ul>\
			<h3>\
		No Place Like Home (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/no-place-like-home-baw/foulty-towers.html\" class=\"drill-down-toc\">\
		Foulty Towers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/no-place-like-home-baw/renovations-part-1-from-tatty-to-tremendous.html\" class=\"drill-down-toc\">\
		Renovations Part 1: From Tatty To Tremendous!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/no-place-like-home-baw/renovations-part-2-from-tremendous-to-stupendous.html\" class=\"drill-down-toc\">\
		Renovations Part 2: From Tremendous To Stupendous!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/no-place-like-home-baw/final-touches.html\" class=\"drill-down-toc\">\
		Final Touches\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Warble Of A Smitten Knight (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/tour-of-the-tourney-grounds.html\" class=\"drill-down-toc\">\
		Tour Of The Tourney Grounds\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/quest-for-a-crest.html\" class=\"drill-down-toc\">\
		Quest For A Crest\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/chivalry-and-rivalry-meet-the-tournament-knights.html\" class=\"drill-down-toc\">\
		Chivalry And Rivalry: Meet The Tournament Knights\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/first-trial-marksmanship-duel.html\" class=\"drill-down-toc\">\
		First Trial: Marksmanship Duel\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/investigation-guillaume-doesnt-give-a-hoot.html\" class=\"drill-down-toc\">\
		Investigation: Guillaume Doesn’t Give A Hoot\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/second-trial-the-great-race.html\" class=\"drill-down-toc\">\
		Second Trial: The Great Race\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/interlude-chivalry-and-revelry.html\" class=\"drill-down-toc\">\
		Interlude: Chivalry And Revelry\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/investigation-the-oriole-flysover-the-hill.html\" class=\"drill-down-toc\">\
		Investigation: The Oriole Flysover The Hill\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/third-trial-ten-men-tin-man-combat.html\" class=\"drill-down-toc\">\
		Third Trial: Ten Men Tin Man Combat!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/final-trial-scaling-the-mountain.html\" class=\"drill-down-toc\">\
		Final Trial: Scaling The Mountain\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw/end-investigation-birds-of-a-feather-flock-together.html\" class=\"drill-down-toc\">\
		End Investigation: Birds Of A Feather Flock Together\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Wars: Belgaard, Part 1 (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-1-baw/veni-vidi-vintners.html\" class=\"drill-down-toc\">\
		Veni, Vidi, Vintners\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Wars: Coronata (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/chaos-at-coronata-vineyard.html\" class=\"drill-down-toc\">\
		Chaos At Coronata Vineyard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/problem-area-1-monster-nest-in-the-northwest-vineyard.html\" class=\"drill-down-toc\">\
		Problem Area #1: Monster Nest In The Northwest Vineyard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/problem-area-2-the-forest-herbarium-abandoned-site.html\" class=\"drill-down-toc\">\
		Problem Area #2: The Forest Herbarium Abandoned Site\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/problem-area-3-guarded-treasure-at-the-overrun-camp.html\" class=\"drill-down-toc\">\
		Problem Area #3: Guarded Treasure At The Overrun Camp\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/problem-area-4-treasure-hunt-at-pittapatte-river-crossing.html\" class=\"drill-down-toc\">\
		Problem Area #4: Treasure Hunt At Pittapatte River Crossing\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/problem-area-5-person-in-distress-north-of-trading-post.html\" class=\"drill-down-toc\">\
		Problem Area #5: Person In Distress North Of Trading Post\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw/sabotage-and-sommeliers-coronata-is-clear.html\" class=\"drill-down-toc\">\
		Sabotage And Sommeliers: Coronata Is Clear!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Coin Doesn’t Stink (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/coin-doesnt-stink-baw/cashing-in-on-cosmos-coin.html\" class=\"drill-down-toc\">\
		Cashing In On Cosmo’s Coin\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/coin-doesnt-stink-baw/a-careful-dig-among-the-dung.html\" class=\"drill-down-toc\">\
		A Careful Dig Among The Dung\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Wars: Vermentino (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/violence-at-the-vermentino-vineyard.html\" class=\"drill-down-toc\">\
		Violence At The Vermentino Vineyard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/problem-area-1-treasure-hunt-at-the-coopers-cottage.html\" class=\"drill-down-toc\">\
		Problem Area #1: Treasure Hunt At The Cooper’s Cottage\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/problem-area-2-guarded-treasure-at-sansretour-valley.html\" class=\"drill-down-toc\">\
		Problem Area #2: Guarded Treasure At Sansretour Valley\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/problem-area-3-abandoned-site-on-pavone-slope.html\" class=\"drill-down-toc\">\
		Problem Area #3: Abandoned Site On Pavone Slope\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/problem-area-4-abandoned-site-at-dantan-glade.html\" class=\"drill-down-toc\">\
		Problem Area #4: Abandoned Site At Dantan Glade\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/problem-area-5-person-in-distress-at-the-herb-garden.html\" class=\"drill-down-toc\">\
		Problem Area #5: Person In Distress At The Herb Garden\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw/sabotage-and-sommeliers-vermentino-no-longer-a-no-go.html\" class=\"drill-down-toc\">\
		Sabotage And Sommeliers: Vermentino No Longer A No-Go!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Don’t Take Candy From A Stranger (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/dont-take-candy-from-a-stranger-baw/skullduggery-at-the-winery.html\" class=\"drill-down-toc\">\
		Skullduggery At The Winery\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/dont-take-candy-from-a-stranger-baw/stash-under-the-sunflowers.html\" class=\"drill-down-toc\">\
		Stash Under The Sunflowers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Wars: The Deus In The Machina (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-the-deus-in-the-machina-baw/taking-stock-of-the-archespore-saplings.html\" class=\"drill-down-toc\">\
		Taking Stock Of The Archespore Saplings\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Wars: Consorting (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-consorting-baw/strange-bedfellows.html\" class=\"drill-down-toc\">\
		Strange Bedfellows\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wine Wars: Belgaard (Part 2) (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/problem-area-4-guarded-treasure-near-gelenser-farm.html\" class=\"drill-down-toc\">\
		Problem Area #4: Guarded Treasure Near Gelenser Farm\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/problem-area-5-person-in-distress-at-the-river-bank.html\" class=\"drill-down-toc\">\
		Problem Area #5: Person In Distress At The River Bank\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/dethroning-est-est-with-abottle-of-plonk.html\" class=\"drill-down-toc\">\
		Dethroning Est Est With Abottle Of Plonk\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/bludgeoning-bandits-and-eradicating-insects.html\" class=\"drill-down-toc\">\
		Bludgeoning Bandits And Eradicating Insects\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/problem-area-1-vineyard-infestation-in-the-wine-orchard.html\" class=\"drill-down-toc\">\
		Problem Area #1: Vineyard Infestation In The Wine Orchard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/problem-area-2-abandoned-site-at-tilly-field.html\" class=\"drill-down-toc\">\
		Problem Area #2: Abandoned Site At Tilly Field\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw/problem-area-3-monster-nest-at-the-stone-outcrop.html\" class=\"drill-down-toc\">\
		Problem Area #3: Monster Nest At The Stone Outcrop\
	</a>\
				</li>\
			</ul>\
			<h3>\
		The Words Of The Prophets Are Written On Sarcophagi (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/the-words-of-the-prophets-are-written-on-sarcophagi-baw/worship-ye-nearing-quietus.html\" class=\"drill-down-toc\">\
		Worship Ye Nearing Quietus\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Big Feet To Fill (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-baw/following-saint-lebiodas-footsteps.html\" class=\"drill-down-toc\">\
		Following Saint Lebioda’s Footsteps\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Father Knows Worst (Baw)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/father-knows-worst-baw/dizzards-scoundrels-tartmongers.html\" class=\"drill-down-toc\">\
		Dizzards! Scoundrels! Tartmongers!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/father-knows-worst-baw/parts-unknown.html\" class=\"drill-down-toc\">\
		Parts Unknown\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/father-knows-worst-baw/end-managing-the-monnarts.html\" class=\"drill-down-toc\">\
		End: Managing The Monnarts\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Big Feet To Fill: The First Group (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-first-group-baw/bringing-death-to-the-woodland-brigands.html\" class=\"drill-down-toc\">\
		Bringing Death To The Woodland Brigands\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Big Feet To Fill: The Second Group (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-second-group-baw/hair-of-the-wolf.html\" class=\"drill-down-toc\">\
		Hair Of The Wolf\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Big Feet To Fill: The Third Group (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-third-group-baw/crossing-a-spriggans-threshold.html\" class=\"drill-down-toc\">\
		Crossing A Spriggan’s Threshold\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Big Feet To Fill: The Fourth Group (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-fourth-group-baw/killed-by-kikimores.html\" class=\"drill-down-toc\">\
		Killed By Kikimores\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Big Feet To Fill: The Fifth Group (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-fifth-group-baw/bandits-at-twelve-oclock.html\" class=\"drill-down-toc\">\
		Bandits At Twelve O’clock\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-fifth-group-baw/conclusion-big-feet-filled.html\" class=\"drill-down-toc\">\
		Conclusion: Big Feet Filled\
	</a>\
				</li>\
			</ul>\
			<h3>\
		There Can Be Only One (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/there-can-be-only-one-baw/chivalry-isnt-dead.html\" class=\"drill-down-toc\">\
		Chivalry Isn’t Dead\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/there-can-be-only-one-baw/chivalric-choices-a-table.html\" class=\"drill-down-toc\">\
		Chivalric Choices: A Table\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/there-can-be-only-one-baw/this-is-the-last-test-what-are-you-made-of.html\" class=\"drill-down-toc\">\
		This Is The Last Test. What Are You Made Of?\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Knight For Hire (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/knight-for-hire-baw/ducal-camerlengo-on-the-money.html\" class=\"drill-down-toc\">\
		Ducal Camerlengo: On The Money\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/knight-for-hire-baw/heroic-deed-1-person-in-distress-2.html\" class=\"drill-down-toc\">\
		Heroic Deed #1: Person In Distress (2)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/knight-for-hire-baw/heroic-deed-2-knight-errant-in-distress-3.html\" class=\"drill-down-toc\">\
		Heroic Deed #2: Knight Errant In Distress (3)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/knight-for-hire-baw/heroic-deed-3-abandoned-sites-7.html\" class=\"drill-down-toc\">\
		Heroic Deed #3: Abandoned Sites (7)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/knight-for-hire-baw/heroic-deed-4-hanse-bases-3.html\" class=\"drill-down-toc\">\
		Heroic Deed #4: Hanse Bases (3)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Goodness, Gracious, Great Balls Of Granite! (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw/getting-a-firm-grasp-of-the-situation.html\" class=\"drill-down-toc\">\
		Getting A Firm Grasp Of The Situation\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw/rescuing-reginald-daubrys-orbs.html\" class=\"drill-down-toc\">\
		Rescuing Reginald D’aubry’s Orbs\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw/getting-teste-with-old-man-hughes.html\" class=\"drill-down-toc\">\
		Getting Teste With Old Man Hughes\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw/epilogue-1-absolutely-knackered.html\" class=\"drill-down-toc\">\
		Epilogue #1: Absolutely Knackered\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw/epilogue-2-never-mind-the-ballocks.html\" class=\"drill-down-toc\">\
		Epilogue #2: Never Mind The Ballocks\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw/epilogue-3-picking-some-plums.html\" class=\"drill-down-toc\">\
		Epilogue #3: Picking Some Plums\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Of Sheers And A Witcher I Sing (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-sheers-and-a-witcher-i-sing-baw/there-was-a-bard-named-papillon.html\" class=\"drill-down-toc\">\
		There Was A Bard Named Papillon…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-sheers-and-a-witcher-i-sing-baw/whose-singing-it-droned-on-and-on.html\" class=\"drill-down-toc\">\
		Whose Singing It Droned On And On…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-sheers-and-a-witcher-i-sing-baw/he-helped-not-a-lot.html\" class=\"drill-down-toc\">\
		He Helped (Not A Lot)…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-sheers-and-a-witcher-i-sing-baw/when-they-discovered-a-plot.html\" class=\"drill-down-toc\">\
		When They Discovered A Plot…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/of-sheers-and-a-witcher-i-sing-baw/and-brought-a-barber-back-to-his-salon.html\" class=\"drill-down-toc\">\
		…And Brought A Barber Back To His Salon\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Paperchase\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/paperchase/welcome-to-cianfanelli-bank.html\" class=\"drill-down-toc\">\
		Welcome To Cianfanelli Bank!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/paperchase/we-look-after-your-coin-as-if-it-were-our-own.html\" class=\"drill-down-toc\">\
		We Look After Your Coin As If It Were Our Own!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/paperchase/the-customer-is-always-right.html\" class=\"drill-down-toc\">\
		The Customer Is Always Right!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/paperchase/red-tape-or-red-mist.html\" class=\"drill-down-toc\">\
		Red Tape, Or Red Mist\
	</a>\
				</li>\
			</ul>\
			<h3>\
		A Portrait Of The Witcher As An Old Man (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-portrait-of-the-witcher-as-an-old-man-baw/capturing-a-glorious-chiaroscuro.html\" class=\"drill-down-toc\">\
		Capturing A Glorious Chiaroscuro\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-portrait-of-the-witcher-as-an-old-man-baw/paint-me-like-one-of-your-beauclair-girls.html\" class=\"drill-down-toc\">\
		Paint Me Like One Of Your Beauclair Girls\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/a-portrait-of-the-witcher-as-an-old-man-baw/artist-license-and-creative-embellishments.html\" class=\"drill-down-toc\">\
		Artist License And Creative Embellishments\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Till Death Do You Part (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw/arrghh-haaaawk-whoooo-feeeeeerrkk.html\" class=\"drill-down-toc\">\
		“Arrghh! Haaaawk! Whoooo! Feeeeeerrkk!”\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw/strange-sounds-after-sunset.html\" class=\"drill-down-toc\">\
		Strange Sounds After Sunset\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw/till-death-do-your-part.html\" class=\"drill-down-toc\">\
		Till Death: Do Your Part\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw/path-1-siding-with-the-gambling-heathen-louis.html\" class=\"drill-down-toc\">\
		Path #1: Siding With “The Gambling Heathen”, Louis.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw/path-2-siding-with-the-saintly-shrew-margot.html\" class=\"drill-down-toc\">\
		Path #2: Siding With “The Saintly Shrew”, Margot.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw/conclusion-catacombs-cleared-of-screaming-spouses.html\" class=\"drill-down-toc\">\
		Conclusion: Catacombs Cleared (Of Screaming Spouses)\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Turn And Face The Strange (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/turn-and-face-the-strange-baw/old-parchments-and-old-friends.html\" class=\"drill-down-toc\">\
		Old Parchments And Old Friends\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/turn-and-face-the-strange-baw/the-elven-obstacle-course.html\" class=\"drill-down-toc\">\
		The Elven Obstacle Course\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/turn-and-face-the-strange-baw/ch-ch-ch-ch-changes.html\" class=\"drill-down-toc\">\
		Ch-Ch-Ch-Ch-Changes\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Extreme Cosplay (Blood and Wine)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/secondary-quests/extreme-cosplay-baw/a-ghastly-discovery-by-gaston.html\" class=\"drill-down-toc\">\
		A Ghastly Discovery By Gaston\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/extreme-cosplay-baw/bread-and-wine.html\" class=\"drill-down-toc\">\
		Bread And Wine\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/extreme-cosplay-baw/divethaf-and-conquer.html\" class=\"drill-down-toc\">\
		Divethaf And Conquer\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/secondary-quests/extreme-cosplay-baw/divethafs-golems.html\" class=\"drill-down-toc\">\
		Divethaf’s Golems\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"gwent-quests\">\
	<h2>Gwent Quests</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent-quests/overview-a-game-within-a-game.html\">\
				Overview: A Game Within A Game\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/gwent-quests/available-quests.html\">\
				Available Quests\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Playing Innkeeps\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-playing-innkeeps/playing-for-inn-keeps.html\" class=\"drill-down-toc\">\
		Playing For (Inn) Keeps\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Velen Players\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-velen-players/the-very-best-hands-across-no-mans-land.html\" class=\"drill-down-toc\">\
		The Very Best Hands Across No-Man’s Land\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Big City Players\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-big-city-players/the-free-cards-of-novigrad.html\" class=\"drill-down-toc\">\
		The Free Cards Of Novigrad\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Old Pals\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-old-pals/familiar-friends-unique-cards.html\" class=\"drill-down-toc\">\
		Familiar Friends: Unique Cards\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Playing Thaler\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-playing-thaler/so-elusive-he-has-his-own-gwent-quest.html\" class=\"drill-down-toc\">\
		So Elusive, He Has His Own Gwent Quest!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Skellige Style\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-skellige-style/wild-islanders-unique-cards.html\" class=\"drill-down-toc\">\
		Wild Islanders: Unique Cards\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Secondary Quest: High Stakes\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes/count-tybalts-gwent-tournament.html\" class=\"drill-down-toc\">\
		Count Tybalt’s Gwent Tournament!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes/meet-and-mingle-prelude-to-the-tournament.html\" class=\"drill-down-toc\">\
		Meet And Mingle: Prelude To The Tournament\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes/three-bouts-and-a-beating.html\" class=\"drill-down-toc\">\
		Three Bouts And A Beating\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes/final-bout-out-for-the-count.html\" class=\"drill-down-toc\">\
		Final Bout: Out For The Count\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes/fleecing-at-the-passiflora.html\" class=\"drill-down-toc\">\
		Fleecing At The Passiflora\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes/bernards-bag-of-crowns.html\" class=\"drill-down-toc\">\
		Bernard’s Bag Of Crowns\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Collect &#39;Em All\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-collect-em-all/this-way-madness-lies.html\" class=\"drill-down-toc\">\
		This Way Madness Lies…!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent Quests: The Duchy Of Toussaint\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-quests-the-duchy-of-toussaint/overview.html\" class=\"drill-down-toc\">\
		Overview\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: To Everything—Turn, Turn, Tournament\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-to-everythingturn-turn-tournament/skellige-clans-invade-the-game-of-gwent.html\" class=\"drill-down-toc\">\
		Skellige Clans Invade The Game Of Gwent\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-to-everythingturn-turn-tournament/dont-sweat-the-shortstuffs.html\" class=\"drill-down-toc\">\
		Don’t Sweat The Shortstuffs\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-to-everythingturn-turn-tournament/two-bouts-and-another-beating.html\" class=\"drill-down-toc\">\
		Two Bouts And Another Beating\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-to-everythingturn-turn-tournament/death-tae-any-and-all-new-factions.html\" class=\"drill-down-toc\">\
		“Death Tae Any And All New Factions!”\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-to-everythingturn-turn-tournament/a-gwent-master-and-a-grand-prize.html\" class=\"drill-down-toc\">\
		A Gwent Master And A Grand Prize\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Gwent: Never Fear, Skellige’s Here!\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/gathering-of-the-card-clan.html\" class=\"drill-down-toc\">\
		Gathering Of The Card Clan\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/skellige-card-holders-castel-ravello-vineyard.html\" class=\"drill-down-toc\">\
		Skellige Card Holders: Castel Ravello Vineyard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/skellige-card-holders-tourney-grounds.html\" class=\"drill-down-toc\">\
		Skellige Card Holders: Tourney Grounds\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/skellige-card-holders-the-cockatrice-inn.html\" class=\"drill-down-toc\">\
		Skellige Card Holders: The Cockatrice Inn\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/skellige-card-holders-flovive.html\" class=\"drill-down-toc\">\
		Skellige Card Holders: Flovive\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/skellige-card-holders-beauclair-all-districts.html\" class=\"drill-down-toc\">\
		Skellige Card Holders: Beauclair (All Districts)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here/skellige-card-holders-francollarts.html\" class=\"drill-down-toc\">\
		Skellige Card Holders: Francollarts\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"the-heroes-pursuits\">\
	<h2>The Heroes’ Pursuits</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Fists Of Fury\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/tactics-fists-of-fury.html\" class=\"drill-down-toc\">\
		Helpful Tactics\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/fists-of-fury-velen.html\" class=\"drill-down-toc\">\
		Fists Of Fury: Velen\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/fists-of-fury-novigrad.html\" class=\"drill-down-toc\">\
		Fists Of Fury: Novigrad\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/fists-of-fury-skellige.html\" class=\"drill-down-toc\">\
		Fists Of Fury: Skellige\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/fists-of-fury-champion-of-champions.html\" class=\"drill-down-toc\">\
		Fists Of Fury: Champion Of Champions\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/fists-of-fury-toussaint.html\" class=\"drill-down-toc\">\
		Fists Of Fury: Toussaint\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury/fists-of-fury-raging-wolf.html\" class=\"drill-down-toc\">\
		Fists Of Fury: Raging Wolf\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Horse Races\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/races-crows-perch.html\" class=\"drill-down-toc\">\
		Races: Crow’s Perch\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/races-the-great-erasmus-vegelbud-memorial-derby.html\" class=\"drill-down-toc\">\
		Races: The Great Erasmus Vegelbud Memorial Derby\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/the-heroes-pursuits-fayrlund.html\" class=\"drill-down-toc\">\
		The Heroes’ Pursuits: Fayrlund\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/the-heroes-pursuits-fyresdal.html\" class=\"drill-down-toc\">\
		The Heroes’ Pursuits: Fyresdal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/the-heroes-pursuits-kaer-trolde.html\" class=\"drill-down-toc\">\
		The Heroes’ Pursuits: Kaer Trolde\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/the-heroes-pursuits-for-the-goddess-glory.html\" class=\"drill-down-toc\">\
		The Heroes’ Pursuits: For The Goddess’ Glory!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/the-heroes-pursuits/horse-races/races-swift-as-the-western-winds.html\" class=\"drill-down-toc\">\
		Races: Swift As The Western Winds\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"witcher-contracts\">\
	<h2>Witcher Contracts</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/witcher-contracts/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Devil By The Well\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-devil-by-the-well/a-devil-with-a-jealous-fury.html\" class=\"drill-down-toc\">\
		A Devil With A Jealous Fury\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-devil-by-the-well/preparation-for-noonwraith-combat.html\" class=\"drill-down-toc\">\
		Preparation For Noonwraith Combat\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Beast Of Honorton\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-beast-of-honorton/horror-at-honorton.html\" class=\"drill-down-toc\">\
		Horror At Honorton\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Jenny O’ The Woods\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-jenny-o-the-woods/dont-go-out-in-the-fields-alone.html\" class=\"drill-down-toc\">\
		Don’t Go Out In The Fields Alone\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-jenny-o-the-woods/the-road-to-hell-is-paved-with-curiosity-p-klicker.html\" class=\"drill-down-toc\">\
		The Road To Hell Is Paved With Curiosity, P---Klicker\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Merry Widow\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-merry-widow/a-monster-in-the-cemetery.html\" class=\"drill-down-toc\">\
		A Monster In The Cemetery\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-merry-widow/time-to-bag-a-sagging-hag.html\" class=\"drill-down-toc\">\
		Time To Bag A Sagging Hag\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Missing Brother\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-brother/the-bemoaning-of-brother-bruno.html\" class=\"drill-down-toc\">\
		The Bemoaning Of Brother Bruno\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-brother/horrors-at-the-old-mine.html\" class=\"drill-down-toc\">\
		Horrors At The Old Mine\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-brother/the-mother-of-all-battles.html\" class=\"drill-down-toc\">\
		The Mother Of All Battles\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Mysterious Tracks\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mysterious-tracks/contract-on-gods-know-what-on.html\" class=\"drill-down-toc\">\
		Contract On… Gods Know What On!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mysterious-tracks/stinks-like-fiend-s-t.html\" class=\"drill-down-toc\">\
		Stinks Like Fiend S--T\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mysterious-tracks/more-fiendish-than-a-fiend.html\" class=\"drill-down-toc\">\
		More Fiendish Than A Fiend\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Mystery Of The Byways Murders\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-mystery-of-the-byways-murders/bartering-with-the-black-ones.html\" class=\"drill-down-toc\">\
		Bartering With The Black Ones\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-mystery-of-the-byways-murders/where-there-are-ghouls-theres-usually-corpses.html\" class=\"drill-down-toc\">\
		Where There Are Ghouls, There’s Usually Corpses…\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-mystery-of-the-byways-murders/the-byways-bloodsucker.html\" class=\"drill-down-toc\">\
		The Byways Bloodsucker\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Patrol Gone Missing\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-patrol-gone-missing/eggebrachts-orders.html\" class=\"drill-down-toc\">\
		Eggebracht’s Orders\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Phantom Of The Trade Route\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-phantom-of-the-trade-route/a-bridge-too-far.html\" class=\"drill-down-toc\">\
		A Bridge Too Far\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-phantom-of-the-trade-route/i-can-feel-it-coming-in-the-air-tonight.html\" class=\"drill-down-toc\">\
		I Can Feel It Coming In The Air Tonight\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Shrieker\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-shrieker/not-just-a-pack-of-peasants-with-pitchforks.html\" class=\"drill-down-toc\">\
		Not Just A Pack Of Peasants With Pitchforks\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-shrieker/ruffling-a-few-feathers.html\" class=\"drill-down-toc\">\
		Ruffling A Few Feathers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Swamp Thing\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-swamp-thing/eyes-like-coals-and-a-jaw-full-of-fangs.html\" class=\"drill-down-toc\">\
		Eyes Like Coals And A Jaw Full Of Fangs\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-swamp-thing/bad-poxy-air-stinging-eyes-and-choking-throat.html\" class=\"drill-down-toc\">\
		Bad, Poxy Air, Stinging Eyes, And Choking Throat\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-swamp-thing/a-fatuus-bog-exploration.html\" class=\"drill-down-toc\">\
		A Fatuus Bog Exploration\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Woodland Beast\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-woodland-beast/guerrillas-in-the-midst.html\" class=\"drill-down-toc\">\
		Guerrillas In The Midst\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-woodland-beast/end-1-death-to-the-scoiatael-devils.html\" class=\"drill-down-toc\">\
		End #1: Death To The Scoia’tael Devils!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-woodland-beast/end-2-something-for-your-silence.html\" class=\"drill-down-toc\">\
		End #2: Something For Your Silence\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-woodland-beast/end-3-doublecross.html\" class=\"drill-down-toc\">\
		End #3: Doublecross!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Apiarian Phantom\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-apiarian-phantom/calling-all-bounty-hunters-trackers-and-witchers.html\" class=\"drill-down-toc\">\
		Calling All Bounty Hunters, Trackers, And Witchers!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-apiarian-phantom/hound-of-the-half-built-house.html\" class=\"drill-down-toc\">\
		Hound Of The Half-Built House\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-apiarian-phantom/the-chill-of-the-chase.html\" class=\"drill-down-toc\">\
		The Chill Of The Chase\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Creature From Oxenfurt Forest\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-creature-from-oxenfurt-forest/wandering-hans.html\" class=\"drill-down-toc\">\
		Wandering Hans\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-creature-from-oxenfurt-forest/a-bit-of-armless-fun.html\" class=\"drill-down-toc\">\
		A Bit Of Armless Fun\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-creature-from-oxenfurt-forest/evidence-of-an-archgriffin.html\" class=\"drill-down-toc\">\
		Evidence Of An Archgriffin\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Deadly Delights\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-deadly-delights/a-manner-most-bestial.html\" class=\"drill-down-toc\">\
		A Manner Most Bestial\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-deadly-delights/sweet-smells-and-sordid-strumpets.html\" class=\"drill-down-toc\">\
		Sweet Smells And Sordid Strumpets\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-deadly-delights/being-fair-to-salma-lilith-confronting-a-succubus.html\" class=\"drill-down-toc\">\
		Being Fair To Salma Lilith: Confronting A Succubus\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Doors Slamming Shut\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-doors-slamming-shut/caveat-emptor.html\" class=\"drill-down-toc\">\
		Caveat Emptor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-doors-slamming-shut/things-that-go-bump-in-the-cellar.html\" class=\"drill-down-toc\">\
		Things That Go Bump In The Cellar\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-doors-slamming-shut/elemental-my-dear-witcher.html\" class=\"drill-down-toc\">\
		Elemental, My Dear Witcher\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: An Elusive Thief\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-an-elusive-thief/an-imp-erfection-in-market-security.html\" class=\"drill-down-toc\">\
		An Imp-Erfection In Market Security\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-an-elusive-thief/impish-acrobatics.html\" class=\"drill-down-toc\">\
		Impish Acrobatics\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-an-elusive-thief/the-doppler-effect.html\" class=\"drill-down-toc\">\
		The Doppler Effect\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Lord Of The Wood\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-lord-of-the-wood/to-the-woods.html\" class=\"drill-down-toc\">\
		To The Woods\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-lord-of-the-wood/the-wrong-kind-of-wildlife.html\" class=\"drill-down-toc\">\
		The Wrong Kind Of Wildlife\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-lord-of-the-wood/tracking-and-waiting.html\" class=\"drill-down-toc\">\
		Tracking And Waiting\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Oxenfurt Drunk\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-oxenfurt-drunk/havent-the-time-to-clean-gutters.html\" class=\"drill-down-toc\">\
		Haven’t The Time To Clean Gutters\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-oxenfurt-drunk/drunk-off-your-ass-on-cheap-wine.html\" class=\"drill-down-toc\">\
		Drunk Off Your Ass On Cheap Wine\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-oxenfurt-drunk/tracking-the-hightailing-higher-vampire.html\" class=\"drill-down-toc\">\
		Tracking The Hightailing Higher Vampire\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The White Lady\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-white-lady/the-not-so-merry-widow.html\" class=\"drill-down-toc\">\
		The Not-So Merry Widow\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-white-lady/luzi-suffer-no-more.html\" class=\"drill-down-toc\">\
		Luzi, Suffer No More\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-white-lady/dance-of-the-white-lady.html\" class=\"drill-down-toc\">\
		Dance Of The White Lady\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Dragon\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-dragon/a-terror-straight-from-the-skjalds-tales.html\" class=\"drill-down-toc\">\
		A Terror Straight From The Skjalds’ Tales\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-dragon/brothers-grim.html\" class=\"drill-down-toc\">\
		Brothers Grim\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-dragon/a-sheep-in-sheeps-clothing.html\" class=\"drill-down-toc\">\
		A Sheep In Sheep’s Clothing\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Here Comes The Groom\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-here-comes-the-groom/searching-for-a-thoroughbred-skirt-chaser.html\" class=\"drill-down-toc\">\
		Searching For A Thoroughbred Skirt-Chaser\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-here-comes-the-groom/the-mad-and-dangerous-depths.html\" class=\"drill-down-toc\">\
		The Mad And Dangerous Depths\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Missing Miners\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-miners/serious-trouble-for-the-silver-ore-scavengers.html\" class=\"drill-down-toc\">\
		Serious Trouble For The Silver Ore Scavengers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-miners/crushed-corpses-at-the-camp.html\" class=\"drill-down-toc\">\
		Crushed Corpses At The Camp\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-miners/end-what-kind-o-monster-slayer-are-ye.html\" class=\"drill-down-toc\">\
		End: What Kind O’ Monster Slayer Are Ye?\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Missing Son\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-son/seeking-adventure-never-to-return.html\" class=\"drill-down-toc\">\
		Seeking Adventure, Never To Return\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-missing-son/off-guard-then-en-garde.html\" class=\"drill-down-toc\">\
		Off-Guard, Then En Garde!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Muire D’yaeblen\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-muire-dyaeblen/solving-a-drowner-problem-with-a-silver-sword.html\" class=\"drill-down-toc\">\
		Solving A Drowner Problem With A Silver Sword\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-muire-dyaeblen/in-search-of-the-seafiends.html\" class=\"drill-down-toc\">\
		In Search Of The Seafiends\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-muire-dyaeblen/perfume-for-the-lady.html\" class=\"drill-down-toc\">\
		Perfume For The Lady\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Phantom Of Eldberg\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-phantom-of-eldberg/guests-are-not-welcome.html\" class=\"drill-down-toc\">\
		Guests Are Not Welcome\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Witcher Contract: Skellige’s Most Wanted\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/witcher-contract-skelliges-most-wanted/the-odd-fellow-from-faroe.html\" class=\"drill-down-toc\">\
		The Odd Fellow From Faroe\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/witcher-contract-skelliges-most-wanted/rock-and-troll.html\" class=\"drill-down-toc\">\
		Rock And Troll\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/witcher-contract-skelliges-most-wanted/a-merciful-release.html\" class=\"drill-down-toc\">\
		A Merciful Release\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/witcher-contract-skelliges-most-wanted/end-1-geralt-of-rivia-monster-mediator-of-kaer-morhen.html\" class=\"drill-down-toc\">\
		End #1: Geralt Of Rivia: Monster Mediator Of Kaer Morhen\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/witcher-contract-skelliges-most-wanted/end-2-geralt-of-rivia-butcher-of-blaviken.html\" class=\"drill-down-toc\">\
		End #2: Geralt Of Rivia: Butcher Of Blaviken\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Waylaid Transport\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-waylaid-transport/fear-no-death-long-for-fame-in-ballads.html\" class=\"drill-down-toc\">\
		Fear No Death? Long For Fame In Ballads?\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-waylaid-transport/finding-the-nest-of-a-subterranean-pest.html\" class=\"drill-down-toc\">\
		Finding The Nest Of A Subterranean Pest\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Mutual Of Beauclair’s Wild Kingdom\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mutual-of-beauclairs-wild-kingdom/highway-to-the-danger-zone.html\" class=\"drill-down-toc\">\
		Highway To The Danger Zone\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mutual-of-beauclairs-wild-kingdom/they-call-us-the-reavers.html\" class=\"drill-down-toc\">\
		They Call Us The Reavers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mutual-of-beauclairs-wild-kingdom/path-1-the-real-white-terror.html\" class=\"drill-down-toc\">\
		Path #1: The Real White Terror\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-mutual-of-beauclairs-wild-kingdom/path-2-out-for-the-count.html\" class=\"drill-down-toc\">\
		Path #2: Out For The Count\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Big Game Hunter\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-big-game-hunter/wanted-the-white-wolf.html\" class=\"drill-down-toc\">\
		Wanted: The White Wolf\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-big-game-hunter/petting-the-big-cats.html\" class=\"drill-down-toc\">\
		Petting The Big Cats\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-big-game-hunter/making-the-earth-move-for-count-beledal.html\" class=\"drill-down-toc\">\
		Making The Earth Move For Count Beledal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-big-game-hunter/the-preening-peacocks.html\" class=\"drill-down-toc\">\
		The Preening Peacocks\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-big-game-hunter/epilogue-geralt-the-muse.html\" class=\"drill-down-toc\">\
		Epilogue: Geralt The Muse\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Equine Phantoms\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-equine-phantoms/go-right-to-the-source-and-ask-the-horse.html\" class=\"drill-down-toc\">\
		Go Right To The Source, And Ask The Horse\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-equine-phantoms/roach-will-give-you-the-answer-that-youll-endorse.html\" class=\"drill-down-toc\">\
		Roach Will Give You The Answer That You’ll Endorse\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-equine-phantoms/hes-always-on-a-steady-course.html\" class=\"drill-down-toc\">\
		He’s Always On A Steady Course\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-equine-phantoms/this-onell-talk-til-her-voice-is-hoarse.html\" class=\"drill-down-toc\">\
		This One’ll Talk ‘Til Her Voice Is Hoarse\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Bovine Blues\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-bovine-blues/quarrying-not-quarreling.html\" class=\"drill-down-toc\">\
		Quarrying, Not Quarreling!\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-bovine-blues/emil-and-the-cow-carnage.html\" class=\"drill-down-toc\">\
		Emil And The Cow Carnage\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-bovine-blues/trail-ends-here-nests-up-there.html\" class=\"drill-down-toc\">\
		Trail Ends Here. Nest’s Up There.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-bovine-blues/the-draconids-of-fort-ussar.html\" class=\"drill-down-toc\">\
		The Draconids Of Fort Ussar\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: The Tufo Monster\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-tufo-monster/a-tufo-one-offer.html\" class=\"drill-down-toc\">\
		A Tufo-One Offer\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-tufo-monster/pomposity-and-perfidy.html\" class=\"drill-down-toc\">\
		Pomposity And Perfidy\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-tufo-monster/jean-luc-out-of-luck.html\" class=\"drill-down-toc\">\
		Jean-Luc Out Of Luck\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-tufo-monster/the-tectonic-terror.html\" class=\"drill-down-toc\">\
		The Tectonic Terror\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-the-tufo-monster/end-back-to-the-bloody-minded-bourbeau.html\" class=\"drill-down-toc\">\
		End: Back To The Bloody-Minded Bourbeau\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Contract: Feet Cold As Ice\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-feet-cold-as-ice/a-load-of-guff-from-francois-de-goff.html\" class=\"drill-down-toc\">\
		A Load Of Guff From Francois De Goff\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-feet-cold-as-ice/into-the-grotto-of-grottore-the-grotesque.html\" class=\"drill-down-toc\">\
		Into The Grotto Of Grottore The Grotesque\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/contract-feet-cold-as-ice/hot-spriggan-cold-feet.html\" class=\"drill-down-toc\">\
		Hot Spriggan. Cold Feet.\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Vintner’s Contract: Dun Tynne Hillside\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/vintners-contract-dun-tynne-hillside/the-worms-are-turned.html\" class=\"drill-down-toc\">\
		The Worms Are Turned\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Vintner’s Contract: Rivecalme Storehouse\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/vintners-contract-rivecalme-storehouse/stinks-like-an-ofieri-larder.html\" class=\"drill-down-toc\">\
		Stinks Like An Ofieri Larder\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Vintner’s Contract: Chuchote Cave\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/vintners-contract-chuchote-cave/neck-deep-in-trouble-of-the-spider-kind.html\" class=\"drill-down-toc\">\
		Neck-Deep In Trouble! Of The Spider Kind!\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Vintner’s Contract: Griffin-In-The-Vines\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/vintners-contract-griffin-in-the-vines/a-whole-lot-of-shaking-going-on.html\" class=\"drill-down-toc\">\
		A Whole Lot Of Shaking Going On\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Vintner’s Contract: Cleaning Those Hard-To-Reach Places\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/witcher-contracts/vintners-contract-cleaning-those-hard-to-reach-places/a-stone-faced-killer.html\" class=\"drill-down-toc\">\
		A Stone-Faced Killer\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"treasure-hunts\">\
	<h2>Treasure Hunts</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/deserter-gold.html\">\
				Deserter Gold\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/dirty-funds.html\">\
				Dirty Funds\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/temerian-valuables.html\">\
				Temerian Valuables\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grayrocks-an-unfortunate-turn-of-events.html\">\
				Grayrocks: An Unfortunate Turn Of Events\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grayrocks-the-things-men-do-for-coin.html\">\
				Grayrocks: The Things Men Do For Coin…\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grayrocks-dowry.html\">\
				Grayrocks: Dowry\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grayrocks-blood-gold.html\">\
				Grayrocks: Blood Gold\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grayrocks-tough-luck.html\">\
				Grayrocks: Tough Luck\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grayrocks-lost-goods.html\">\
				Grayrocks: Lost Goods\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/the-descent-out-of-the-frying-pan-into-the-fire.html\">\
				The Descent: Out Of The Frying Pan, Into The Fire\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/the-descent-hidden-from-the-world.html\">\
				The Descent: Hidden From The World\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/spitfire-bluff-sunken-treasure.html\">\
				Spitfire Bluff: Sunken Treasure\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/spitfire-bluff-a-costly-mistake.html\">\
				Spitfire Bluff: A Costly Mistake\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/spitfire-bluff-queen-zuleykas-treasure.html\">\
				Spitfire Bluff: Queen Zuleyka’s Treasure\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/spitfire-bluff-a-plea-ignored.html\">\
				Spitfire Bluff: A Plea Ignored\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/the-mire-dont-play-with-the-gods.html\">\
				The Mire: Don’t Play With The Gods\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/the-mire-the-dead-have-no-defense.html\">\
				The Mire: The Dead Have No Defense\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/the-miresunken-chest.html\">\
				The Mire: Sunken Chest\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grassy-knoll-coast-of-wrecks.html\">\
				Grassy Knoll: Coast Of Wrecks\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grassy-knoll-battlefield-loot.html\">\
				Grassy Knoll: Battlefield Loot\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/grassy-knoll-the-cursed-chapel.html\">\
				Grassy Knoll: The Cursed Chapel\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-a-dark-legacy.html\">\
				Gustfields: A Dark Legacy\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-the-drakenborg-redemption.html\">\
				Gustfields: The Drakenborg Redemption\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfieldsfrom-ofiers-distant-shores.html\">\
				Gustfields:from Ofier’s Distant Shores\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-the-royal-air-force.html\">\
				Gustfields: The Royal Air Force\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-the-secret-life-of-count-romilly.html\">\
				Gustfields: The Secret Life Of Count Romilly\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-a-surprise-inheritance.html\">\
				Gustfields: A Surprise Inheritance\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-the-sword-famine-and-perfidy.html\">\
				Gustfields: The Sword, Famine And Perfidy\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/gustfields-tinker-hunter-soldier-spy.html\">\
				Gustfields: Tinker, Hunter, Soldier, Spy\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/ard-skellig-inheritance.html\">\
				Ard Skellig: Inheritance\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/ard-skellig-freya-be-praised.html\">\
				Ard Skellig: Freya Be Praised!\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/ard-skellig-x-marks-the-spot.html\">\
				Ard Skellig: X Marks The Spot\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/ard-skellig-family-fortune.html\">\
				Ard Skellig: Family Fortune\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/ard-skellig-pearls-of-the-coast.html\">\
				Ard Skellig: Pearls Of The Coast\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/an-skellig-nilfgaardian-treasure.html\">\
				An Skellig: Nilfgaardian Treasure\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/undvik-precious-haul.html\">\
				Undvik: Precious Haul\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/undvik-ruins-hidden-treasure-you-know.html\">\
				Undvik: Ruins, Hidden Treasure, You Know…\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/undvik-shortcut.html\">\
				Undvik: Shortcut\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/spikeroog-not-only-eagles-dare.html\">\
				Spikeroog: Not Only Eagles Dare\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/snidhall-isle-unluckys-treasure.html\">\
				Snidhall Isle: Unlucky’s Treasure\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/faroe-hidden-in-the-depths.html\">\
				Faroe: Hidden In The Depths\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/faroe-ironsides-treasure.html\">\
				Faroe: Ironsides’ Treasure\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-the-last-exploits-of-selinas-gang.html\">\
				Toussaint: The Last Exploits Of Selina’s Gang\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-what-was-this-about-again.html\">\
				Toussaint: What Was This About Again?\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-curse-ofcarnarvona.html\">\
				Toussaint: Curse of Carnarvona\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-around-the-world-in-eight-days.html\">\
				Toussaint: Around The World In… Eight Days\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-the-black-widow.html\">\
				Toussaint: The Black Widow\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-the-toussaint-prison-experiment.html\">\
				Toussaint: The Toussaint Prison Experiment\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-the-suffering-of-young-francois.html\">\
				Toussaint: The Suffering Of Young Francois\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-but-other-than-that-how-did-you-enjoy-the-play.html\">\
				Toussaint: But Other Than That, How Did You Enjoy The Play?\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-the-inconstant-gardener.html\">\
				Toussaint: The Inconstant Gardener\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-applied-escapology.html\">\
				Toussaint: Applied Escapology\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-filbert-always-pays-his-debts.html\">\
				Toussaint: Filbert Always Pays His Debts\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-waiting-for-goe-and-doh.html\">\
				Toussaint: Waiting For Goe And Doh\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/treasure-hunts/toussaint-spoontaneous-profits.html\">\
				Toussaint: Spoontaneous Profits!\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"scavenger-hunts\">\
	<h2>Scavenger Hunts</h2>\
	<ul>\
		<li>\
			<h3>\
		Viper School Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/viper-school-gear/serpentine-steel-sword-kolgrims-comeuppance.html\" class=\"drill-down-toc\">\
		Serpentine Steel Sword: Kolgrim’s Comeuppance\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/viper-school-gear/serpentine-silver-sword-cryptic-notes.html\" class=\"drill-down-toc\">\
		Serpentine Silver Sword: Cryptic Notes\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Viper School Gear (Additional)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/viper-school-gear-additional/viper-school-gear-a-collector-of-vedyminaica.html\" class=\"drill-down-toc\">\
		Viper School Gear: A Collector Of Vedyminaica\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/viper-school-gear-additional/viper-school-venomous-steel-sword-borsodi-basement-bonanza.html\" class=\"drill-down-toc\">\
		Viper School Venomous Steel Sword: Borsodi Basement Bonanza\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/viper-school-gear-additional/viper-school-venomous-silver-sword.html\" class=\"drill-down-toc\">\
		Viper School Venomous Silver Sword\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/viper-school-gear-additional/end-witcher-viper-gear-the-serpents-bite.html\" class=\"drill-down-toc\">\
		End: Witcher Viper Gear: The Serpent’s Bite\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Griffin School Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-gear/preamble-maps-from-the-adjunct-cartographer-edwin-greloff.html\" class=\"drill-down-toc\">\
		Preamble: Maps From The Adjunct Cartographer Edwin Greloff\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Griffin School Gear (Basic)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-gear-basic/armor-boots-gauntlets-and-trousers-descent-into-the-dragonslayers-grotto.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers: Descent Into The Dragonslayer’s Grotto\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-gear-basic/silver-sword-precarious-climbing-at-lornruk-lighthouse.html\" class=\"drill-down-toc\">\
		Silver Sword: Precarious Climbing At Lornruk Lighthouse\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-gear-basic/steel-sword-the-saga-of-witcher-george.html\" class=\"drill-down-toc\">\
		Steel Sword: The Saga Of Witcher George\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Griffin School Diagrams – Part 1 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-1-enhanced/boots-enhanced-north-mudplough-ruins-reconnoiter.html\" class=\"drill-down-toc\">\
		Boots (Enhanced): North Mudplough Ruins Reconnoiter\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-1-enhanced/trousers-enhanced-sifting-through-the-burned-ruins.html\" class=\"drill-down-toc\">\
		Trousers (Enhanced): Sifting Through The Burned Ruins\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-1-enhanced/steel-sword-enhanced-bloodshed-at-the-pirates-hideout.html\" class=\"drill-down-toc\">\
		Steel Sword (Enhanced): Bloodshed At The Pirates’ Hideout\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Griffin School Diagrams – Part 2 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-2-enhanced/armor-enhanced-hoarded-by-the-patriot-troll.html\" class=\"drill-down-toc\">\
		Armor (Enhanced): Hoarded By The Patriot Troll\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-2-enhanced/gauntlets-enhanced-guarded-by-the-spirits-of-the-dead.html\" class=\"drill-down-toc\">\
		Gauntlets (Enhanced): Guarded By The Spirits Of The Dead\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-2-enhanced/silver-sword-enhanced-exploring-the-ghouls-nest.html\" class=\"drill-down-toc\">\
		Silver Sword (Enhanced): Exploring The Ghouls’ Nest\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Griffin School Diagrams – Part 3 (Superior)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-3-superior/steel-sword-superior-against-the-elements-in-an-skellig.html\" class=\"drill-down-toc\">\
		Steel Sword (Superior): Against The Elements In An Skellig\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-3-superior/armor-boots-gauntlets-and-trousers-superior-against-the-odds.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers (Superior): Against The Odds\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-3-superior/silver-sword-superior-under-the-elverum-lighthouse.html\" class=\"drill-down-toc\">\
		Silver Sword (Superior): Under The Elverum Lighthouse\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Griffin School Diagrams – Part 4 (Mastercrafted)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-4-mastercrafted/steel-sword-mastercrafted-abandoned-in-boxholm.html\" class=\"drill-down-toc\">\
		Steel Sword (Mastercrafted): Abandoned In Boxholm\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-4-mastercrafted/armor-boots-gauntlets-and-trousers-mastercrafted-in-the-lair-of-the-one-eyed-king.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers (Mastercrafted): In The Lair Of The One-Eyed King\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-4-mastercrafted/silver-sword-mastercrafted-amid-the-ruins-of-kaer-dhu.html\" class=\"drill-down-toc\">\
		Silver Sword (Mastercrafted): Amid The Ruins Of Kaer Dhu\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-4-mastercrafted/end-the-griffin-warrior.html\" class=\"drill-down-toc\">\
		End: The Griffin Warrior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Cat School Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-gear/preamble-maps-from-the-adjunct-mapper-adalbert-kermith.html\" class=\"drill-down-toc\">\
		Preamble: Maps From The Adjunct Mapper Adalbert Kermith\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Cat School Gear (Basic)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-gear-basic/armor-boots-gauntlets-and-trousers-novigrads-biggest-secret.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers: Novigrad’s Biggest Secret\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-gear-basic/crossbow-the-resting-place-of-the-flying-stag.html\" class=\"drill-down-toc\">\
		Crossbow: The Resting Place Of The Flying Stag\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-gear-basic/silver-sword-walled-up-alive-in-est-tayiar.html\" class=\"drill-down-toc\">\
		Silver Sword: Walled Up Alive In Est Tayiar\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-gear-basic/steel-sword-the-trial-of-witcher-kiyan-is-complete.html\" class=\"drill-down-toc\">\
		Steel Sword: The Trial Of Witcher Kiyan Is Complete\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Cat School Diagrams – Part 1 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-1-enhanced/boots-enhanced-trespassing-in-the-wyverns-den.html\" class=\"drill-down-toc\">\
		Boots (Enhanced): Trespassing In The Wyvern’s Den\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-1-enhanced/armor-enhanced-traversing-the-abandoned-manor.html\" class=\"drill-down-toc\">\
		Armor (Enhanced): Traversing The Abandoned Manor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-1-enhanced/silver-sword-enhanced-up-into-squalor.html\" class=\"drill-down-toc\">\
		Silver Sword (Enhanced): Up Into Squalor\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Cat School Diagrams – Part 2 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-2-enhanced/gauntlets-enhanced-necrophages-in-the-quarry.html\" class=\"drill-down-toc\">\
		Gauntlets (Enhanced): Necrophages In The Quarry\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-2-enhanced/trousers-enhanced-hidden-alcoves-in-the-sewers.html\" class=\"drill-down-toc\">\
		Trousers (Enhanced): Hidden Alcoves In The Sewers\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-2-enhanced/steel-sword-enhanced-hiding-a-haul-in-the-hog-hut.html\" class=\"drill-down-toc\">\
		Steel Sword (Enhanced): Hiding A Haul In The Hog Hut\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Cat School Diagrams – Part 3 (Superior)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-3-superior/steel-sword-superior-assault-in-the-cavern.html\" class=\"drill-down-toc\">\
		Steel Sword (Superior): Assault In The Cavern\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-3-superior/armor-boots-gauntlets-and-trousers-superior-attack-at-the-ruins.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers (Superior): Attack At The Ruins\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-3-superior/silver-sword-superior-carnage-in-the-cavern.html\" class=\"drill-down-toc\">\
		Silver Sword (Superior): Carnage In The Cavern\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Cat School Diagrams – Part 4 (Mastercrafted)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-4-mastercrafted/steel-sword-mastercrafted-death-from-within-treasure-above.html\" class=\"drill-down-toc\">\
		Steel Sword (Mastercrafted): Death From Within, Treasure Above\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-4-mastercrafted/armor-boots-gauntlets-and-trousers-mastercrafted-death-from-above-treasure-within.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers (Mastercrafted): Death From Above, Treasure Within\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-4-mastercrafted/silver-sword-mastercrafted-treasure-above.html\" class=\"drill-down-toc\">\
		Silver Sword (Mastercrafted): Treasure Above\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-4-mastercrafted/end-the-taloned-talents-of-cat-school-gear.html\" class=\"drill-down-toc\">\
		End: The Taloned Talents Of Cat School Gear\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bear School Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-gear/preamble-maps-from-the-adjunct-geographer-ibrahim-savi.html\" class=\"drill-down-toc\">\
		Preamble: Maps From The Adjunct Geographer Ibrahim Savi\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bear School Gear (Basic)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-gear-basic/armor-boots-gauntlets-and-trousers-scaling-yngvars-fang.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers: Scaling Yngvar’s Fang\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-gear-basic/silver-sword-terror-at-fort-etnir.html\" class=\"drill-down-toc\">\
		Silver Sword: Terror At Fort Etnir\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-gear-basic/crossbow-in-the-gloom-of-melusines-room.html\" class=\"drill-down-toc\">\
		Crossbow: In The Gloom Of Melusine’s Room\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-gear-basic/steel-sword-hunting-witcher-gerd.html\" class=\"drill-down-toc\">\
		Steel Sword: Hunting Witcher Gerd\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bear School Diagrams – Part 1 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-1-enhanced/silver-sword-enhanced-into-the-snow-topped-fortress.html\" class=\"drill-down-toc\">\
		Silver Sword (Enhanced): Into The Snow-Topped Fortress\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-1-enhanced/boots-enhanced-breaking-wind-and-rocks.html\" class=\"drill-down-toc\">\
		Boots (Enhanced): Breaking Wind And Rocks\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-1-enhanced/armor-enhanced-banishing-the-grossbart-brothers.html\" class=\"drill-down-toc\">\
		Armor (Enhanced): Banishing The Grossbart Brothers\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bear School Diagrams – Part 2 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-2-enhanced/gauntlets-enhanced-a-lack-of-terror-near-fort-etnir.html\" class=\"drill-down-toc\">\
		Gauntlets (Enhanced): A Lack Of Terror Near Fort Etnir\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-2-enhanced/steel-sword-enhanced-triumph-over-the-pirate-horde.html\" class=\"drill-down-toc\">\
		Steel Sword (Enhanced): Triumph Over The Pirate Horde\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-2-enhanced/trousers-enhanced-inside-a-smugglers-cove.html\" class=\"drill-down-toc\">\
		Trousers (Enhanced): Inside A Smuggler’s Cove\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bear School Diagrams – Part 3 (Superior)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-3-superior/armor-boots-gauntlets-and-trousers-superior-quarry-exploration.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers (Superior): Quarry Exploration\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-3-superior/steel-sword-superior-braving-the-elements.html\" class=\"drill-down-toc\">\
		Steel Sword (Superior): Braving The Elements\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-3-superior/silver-sword-superior-illusions-in-the-fog.html\" class=\"drill-down-toc\">\
		Silver Sword (Superior): Illusions In The Fog\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Bear School Diagrams – Part 4 (Mastercrafted)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-4-mastercrafted/steel-sword-mastercrafted-into-the-bear-cave.html\" class=\"drill-down-toc\">\
		Steel Sword (Mastercrafted): Into The Bear Cave\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-4-mastercrafted/armor-boots-gauntlets-and-trousers-mastercrafted-battle-at-the-bastion.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers (Mastercrafted): Battle At The Bastion\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-4-mastercrafted/silver-sword-mastercrafted-mangling-drowners-in-the-mire.html\" class=\"drill-down-toc\">\
		Silver Sword (Mastercrafted): Mangling Drowners In The Mire\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-4-mastercrafted/end-the-ferocity-of-bear-school-gear.html\" class=\"drill-down-toc\">\
		End: The Ferocity Of Bear School Gear\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear/preamble-notes-from-the-eponymous-hieronymus.html\" class=\"drill-down-toc\">\
		Preamble: Notes From The Eponymous Hieronymus\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear (Basic)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-basic/armor-boots-gauntlets-and-trousers-the-last-signal.html\" class=\"drill-down-toc\">\
		Armor, Boots, Gauntlets, And Trousers: The Last Signal\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-basic/steel-sword-the-last-bastion.html\" class=\"drill-down-toc\">\
		Steel Sword: The Last Bastion\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-basic/silver-sword-the-last-watchtower.html\" class=\"drill-down-toc\">\
		Silver Sword: The Last Watchtower\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear Upgrade Diagrams – Part 1 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-1-enhanced/silver-sword-enhanced-deep-down-the-barons-well.html\" class=\"drill-down-toc\">\
		Silver Sword (Enhanced): Deep Down The Baron’s Well\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-1-enhanced/boots-enhanced-at-the-rivers-edge-below-the-marsh.html\" class=\"drill-down-toc\">\
		Boots (Enhanced): At The River’s Edge, Below The Marsh\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-1-enhanced/armor-enhanced-below-the-folly-into-the-lake.html\" class=\"drill-down-toc\">\
		Armor (Enhanced): Below The Folly, Into The Lake\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear Upgrade Diagrams – Part 2 (Enhanced)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-2-enhanced/gauntlets-advanced-entering-the-forktails-lair.html\" class=\"drill-down-toc\">\
		Gauntlets (Advanced): Entering The Forktail’s Lair\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-2-enhanced/trousers-advanced-below-the-rippling-waters.html\" class=\"drill-down-toc\">\
		Trousers (Advanced): Below The Rippling Waters\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-2-enhanced/steel-sword-advanced-return-to-the-watchtower.html\" class=\"drill-down-toc\">\
		Steel Sword (Advanced): Return To The Watchtower\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear Upgrade Diagrams – Part 3 (Superior)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-3-superior/armor-superior-raiding-the-harpies-nest.html\" class=\"drill-down-toc\">\
		Armor (Superior): Raiding The Harpies’ Nest\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-3-superior/steel-sword-superior-through-the-fumes-in-the-ice-trolls-fort.html\" class=\"drill-down-toc\">\
		Steel Sword (Superior): Through The Fumes In The Ice Troll’s Fort\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-3-superior/silver-sword-superior-nestled-in-the-barrows-alcove.html\" class=\"drill-down-toc\">\
		Silver Sword (Superior): Nestled In The Barrow’s Alcove\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear Upgrade Diagrams – Part 4 (Superior)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-4-superior/gauntlets-superior-wrath-of-the-earth-elemental.html\" class=\"drill-down-toc\">\
		Gauntlets (Superior): Wrath Of The Earth Elemental\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-4-superior/boots-superior-exploring-berengars-cave.html\" class=\"drill-down-toc\">\
		Boots (Superior): Exploring Berengar’s Cave\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-4-superior/trousers-superior-cave-of-the-trials-of-the-grasses.html\" class=\"drill-down-toc\">\
		Trousers (Superior): Cave Of The Trials Of The Grasses\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear Upgrade Diagrams – Part 5 (Mastercrafted)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-5-mastercrafted/steel-sword-mastercrafted-shipwreck-of-the-southern-peninsula.html\" class=\"drill-down-toc\">\
		Steel Sword (Mastercrafted): Shipwreck Of The Southern Peninsula\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-5-mastercrafted/armor-mastercrafted-the-offering-at-the-elven-ruins.html\" class=\"drill-down-toc\">\
		Armor (Mastercrafted): The Offering At The Elven Ruins\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-5-mastercrafted/silver-sword-mastercrafted-the-fiend-of-kimbolt-way.html\" class=\"drill-down-toc\">\
		Silver Sword (Mastercrafted): The Fiend Of Kimbolt Way\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Wolf School Gear Upgrade Diagrams – Part 6 (Mastercrafted)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-6-mastercrafted/gauntlets-mastercrafted-derelict-castle-deviant-fiend.html\" class=\"drill-down-toc\">\
		Gauntlets (Mastercrafted): Derelict Castle, Deviant Fiend\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-6-mastercrafted/boots-mastercrafted-the-lost-village-of-undvik.html\" class=\"drill-down-toc\">\
		Boots (Mastercrafted): The Lost Village Of Undvik\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-6-mastercrafted/trousers-mastercrafted-on-the-lookout-at-the-old-watchtower.html\" class=\"drill-down-toc\">\
		Trousers (Mastercrafted): On The Lookout At The Old Watchtower\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-6-mastercrafted/end-the-wolven-warrior.html\" class=\"drill-down-toc\">\
		End: The Wolven Warrior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Master Master Master Master!\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/master-master-master-master/a-lazare-forge-attitude.html\" class=\"drill-down-toc\">\
		A Lazare Forge Attitude\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/master-master-master-master/grandmaster-lafargue-and-the-furious-forge.html\" class=\"drill-down-toc\">\
		Grandmaster Lafargue And The Furious Forge\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Grandmaster Griffin Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-griffin-gear/on-the-trail-of-witcher-jerome.html\" class=\"drill-down-toc\">\
		On The Trail Of Witcher Jerome\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-griffin-gear/a-battle-for-the-ages-at-mont-crane-castle.html\" class=\"drill-down-toc\">\
		A Battle For The Ages At Mont Crane Castle\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-griffin-gear/jerome-moreaus-prison.html\" class=\"drill-down-toc\">\
		Jerome Moreau’s Prison\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-griffin-gear/end-the-grand-griffin-warrior.html\" class=\"drill-down-toc\">\
		End: The Grand Griffin Warrior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Grandmaster Feline Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-feline-gear/out-for-the-count-down-for-the-clerk.html\" class=\"drill-down-toc\">\
		Out For The Count, Down For The Clerk\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-feline-gear/bandits-lament-at-arthach-palace.html\" class=\"drill-down-toc\">\
		Bandits’ Lament At Arthach Palace\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-feline-gear/forcing-back-foliage-in-the-pits-of-brume.html\" class=\"drill-down-toc\">\
		Forcing Back Foliage In The Pits Of Brume\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-feline-gear/end-the-grand-feline-warrior.html\" class=\"drill-down-toc\">\
		End: The Grand Feline Warrior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Grandmaster Wolven Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-wolven-gear/here-lies-our-father-he-died-so-others-may-live.html\" class=\"drill-down-toc\">\
		Here Lies Our Father. He Died So Others May Live.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-wolven-gear/here-lies-our-witcher-he-died-when-a-rock-fell-on-him.html\" class=\"drill-down-toc\">\
		Here Lies Our Witcher. He Died When A Rock Fell On Him.\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-wolven-gear/end-the-grand-wolven-warrior.html\" class=\"drill-down-toc\">\
		End: The Grand Wolven Warrior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Grandmaster Ursine Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-ursine-gear/undermining-the-peasants-of-flovive.html\" class=\"drill-down-toc\">\
		Undermining The Peasants Of Flovive\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-ursine-gear/witcher-junods-final-jaunt.html\" class=\"drill-down-toc\">\
		Witcher Junod’s Final Jaunt\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-ursine-gear/end-the-grand-ursine-warrior.html\" class=\"drill-down-toc\">\
		End: The Grand Ursine Warrior\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Grandmaster Manticore Gear\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear/pilgrimage-at-bastoy-prison-ruins.html\" class=\"drill-down-toc\">\
		Pilgrimage At Bastoy Prison Ruins\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear/a-hope-and-a-prayer.html\" class=\"drill-down-toc\">\
		A Hope And A Prayer\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear/this-beggars-belief.html\" class=\"drill-down-toc\">\
		This Beggar’s Belief\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear/a-murky-delve-trials-at-the-hidden-chapel.html\" class=\"drill-down-toc\">\
		A Murky Delve: Trials At The Hidden Chapel\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear/the-last-cleansing-of-witcher-merten.html\" class=\"drill-down-toc\">\
		The Last Cleansing Of Witcher Merten\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear/end-the-manticore-warrior.html\" class=\"drill-down-toc\">\
		End: The Manticore Warrior\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"appendices-and-compendiums\">\
	<h2>Appendices and Compendiums</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/overview.html\">\
				Overview\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Bestiary\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/a-witchers-guide-to-killing-monsters.html\" class=\"drill-down-toc\">\
		A Witcher’s Guide To Killing Monsters\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/bestiary-legend.html\" class=\"drill-down-toc\">\
		Bestiary Legend\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/humanoids.html\" class=\"drill-down-toc\">\
		Humanoids\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/beasts.html\" class=\"drill-down-toc\">\
		Beasts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/cursed-ones.html\" class=\"drill-down-toc\">\
		Cursed Ones\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/draconids.html\" class=\"drill-down-toc\">\
		Draconids\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/elementa.html\" class=\"drill-down-toc\">\
		Elementa\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/hybrids.html\" class=\"drill-down-toc\">\
		Hybrids\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/insectoids.html\" class=\"drill-down-toc\">\
		Insectoids\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/necrophages.html\" class=\"drill-down-toc\">\
		Necrophages\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/ogroids.html\" class=\"drill-down-toc\">\
		Ogroids\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/relicts.html\" class=\"drill-down-toc\">\
		Relicts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/specters.html\" class=\"drill-down-toc\">\
		Specters\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/vampires.html\" class=\"drill-down-toc\">\
		Vampires\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/special-battles-and-entities.html\" class=\"drill-down-toc\">\
		Special Battles And Entities\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/special-battles-and-entities-hearts-of-stone.html\" class=\"drill-down-toc\">\
		Special Battles And Entities: Hearts Of Stone\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/bestiary/special-battles-and-entities-blood-and-wine.html\" class=\"drill-down-toc\">\
		Special Battles And Entities: Blood And Wine\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Places Of Power\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/overview.html\" class=\"drill-down-toc\">\
		Overview\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/places-of-power.html\" class=\"drill-down-toc\">\
		Places Of Power\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/white-orchard.html\" class=\"drill-down-toc\">\
		White Orchard\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/velen-no-mans-land.html\" class=\"drill-down-toc\">\
		Velen (No Man’s Land)\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/novigrad.html\" class=\"drill-down-toc\">\
		Novigrad\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/skellige.html\" class=\"drill-down-toc\">\
		Skellige\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/kaer-morhen.html\" class=\"drill-down-toc\">\
		Kaer Morhen\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/other-worlds.html\" class=\"drill-down-toc\">\
		Other Worlds\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/places-of-power/toussaint.html\" class=\"drill-down-toc\">\
		Toussaint\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Carnal Knowledge\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/carnal-knowledge/locations.html\" class=\"drill-down-toc\">\
		Locations\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Achievements And Trophies\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/appendices-and-compendiums/achievements-and-trophies/achievements-and-trophies.html\" class=\"drill-down-toc\">\
		List of Achievements and Trophies\
	</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"inventory-data\">\
	<h2>Inventory Data</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/introduction-witchers-tools.html\">\
				Introduction to a Witcher&#39;s Tools \
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/item-data.html\">\
				Item Data\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/shop-items.html\">\
				Shop Items\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/shop-locations.html\">\
				Shop Locations\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/item-locations.html\">\
				Item Locations\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/alchemy.html\">\
				Alchemy\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Armor\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/inventory-data/armor/armor.html\" class=\"drill-down-toc\">\
		Armor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/armor/gloves.html\" class=\"drill-down-toc\">\
		Gloves\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/armor/pants.html\" class=\"drill-down-toc\">\
		Pants\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/armor/boots.html\" class=\"drill-down-toc\">\
		Boots\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Armor (Crafted)\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafted-armor/crafted-armor.html\" class=\"drill-down-toc\">\
		Crafted Armor\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafted-armor/crafted-gloves.html\" class=\"drill-down-toc\">\
		Crafted Gloves\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafted-armor/crafted-pants.html\" class=\"drill-down-toc\">\
		Crafted Pants\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafted-armor/crafted-boots.html\" class=\"drill-down-toc\">\
		Crafted Boots\
	</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/bolts.html\">\
				Bolts\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/bombs.html\">\
				Bombs\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/books.html\">\
				Books\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/crossbows.html\">\
				Crossbows\
			</a>\
				</li>\
			</ul>\
			<h3>\
		Crafting Elements\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/common-materials.html\" class=\"drill-down-toc\">\
		Common Materials\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/crating-materials.html\" class=\"drill-down-toc\">\
		Crating Materials\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/metals-and-alloys.html\" class=\"drill-down-toc\">\
		Metals and Alloys\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/monster-remains.html\" class=\"drill-down-toc\">\
		Monster Remains\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/miscellaneous.html\" class=\"drill-down-toc\">\
		Miscellaneous\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/clutter.html\" class=\"drill-down-toc\">\
		Clutter\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/leather-hides-and-pelts.html\" class=\"drill-down-toc\">\
		Leather, Hides and Pelts\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/chitin-scale.html\" class=\"drill-down-toc\">\
		Chitin Scale\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/precious-gems.html\" class=\"drill-down-toc\">\
		Precious Gems\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/crafting-elements/jewelry.html\" class=\"drill-down-toc\">\
		Jewelry\
	</a>\
				</li>\
			</ul>\
			<h3>\
		Diagrams\
		<i class=\"icon-caret-right menu-expand\"></i>\
	</h3>\
			<ul>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/crafting-component-diagrams.html\" class=\"drill-down-toc\">\
		Crafting Component Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/ranged-weapon-diagrams.html\" class=\"drill-down-toc\">\
		Ranged Weapon Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/repair-kit-diagrams.html\" class=\"drill-down-toc\">\
		Repair Kit Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/crafted-steel-weapon-diagrams.html\" class=\"drill-down-toc\">\
		Crafted Steel Weapon Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/crafted-silver-weapon-diagrams.html\" class=\"drill-down-toc\">\
		Crafted Silver Weapon Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/crafted-steel-relic-weapon-diagrams.html\" class=\"drill-down-toc\">\
		Crafted Steel Relic Weapon Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/crafted-silver-relic-weapon-diagrams.html\" class=\"drill-down-toc\">\
		Crafted Silver Relic Weapon Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/crafted-armor-diagrams.html\" class=\"drill-down-toc\">\
		Crafted Armor Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/runestone-diagrams.html\" class=\"drill-down-toc\">\
		Runestone Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/glyph-diagrams.html\" class=\"drill-down-toc\">\
		Glyph Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/runeword-diagrams.html\" class=\"drill-down-toc\">\
		Runeword Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/episode-one-diagrams.html\" class=\"drill-down-toc\">\
		Episode One Diagrams\
	</a>\
				</li>\
				<li>\
					<a href=\"$roothtml/inventory-data/diagrams/episode-two-diagrams.html\" class=\"drill-down-toc\">\
		Episode Two Diagrams\
	</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/decoctions.html\">\
				Decoctions\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/dyes.html\">\
				Dyes\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/foods.html\">\
				Foods\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/glyphs.html\">\
				Glyphs\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/herbs.html\">\
				Herbs\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/horse.html\">\
				Horse\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/monsters.html\">\
				Monsters\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/mutagens.html\">\
				Mutagens\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/oils.html\">\
				Oils\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/potions.html\">\
				Potions\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/runestones.html\">\
				Runestones\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/runewords-and-glyphwords.html\">\
				Runewords and Glyphwords\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/trophies.html\">\
				Trophies\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/steel-and-silver-swords.html\">\
				Steel and Silver Swords\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/relic-weapons.html\">\
				Relic Weapons\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/inventory-data/crafted-weapons.html\">\
				Crafted Weapons\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<section class=\"list\" data-id=\"credits\">\
	<h2>Credits</h2>\
	<ul>\
		<li>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/credits/game-credits.html\">\
				Game Credits\
			</a>\
				</li>\
			</ul>\
			<ul style=\"display: block;\" class=\"not-indented\">\
				<li>\
					<a href=\"$roothtml/credits/eguide-credits.html\">\
				eGuide Credits\
			</a>\
				</li>\
			</ul>\
		</li>\
	</ul>\
</section>\
<img src=\"$rootstatic/img/menu-tab.png\" id=\"menu-tab\" />\
<icon class=\"icon-remove\" id=\"menu-close\"></icon>\
<icon class=\"icon-reorder\" id=\"menu-open\"></icon>';
  
  inner_html = inner_html.replace(/\$root/g, path);
  obj_id.innerHTML=inner_html;
};

function insert_chapters(obj_id, path){
  var inner_html = '<a href=\"#\" class=\"close\"><i class=\"icon-remove\"></i></a>\
<ul>\
	<li>\
		<h3>How To Use This Guide</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/how-to-use-this-guide/quest-list-table-alphabetical.html\">\
					<span><span>Quest List Table (Alphabetical)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/how-to-use-this-guide/additional-content.html\">\
					<span><span>Additional Content</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Atlas</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/using-the-atlas.html\">\
					<span><span>Using the Atlas</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/map-legend.html\">\
					<span><span>Map Legend</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/white-orchard.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>White Orchard</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/royal-palace-vizima.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Royal Palace in Vizima</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/velen-no-mans-land.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Velen (No Man&#39;s Land)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/novigrad.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Novigrad</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/skellige-isles.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Skellige Isles</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/isle-mists.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Isle of Mists</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/dark-valley.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Dark Valley</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/tedd-deireadh.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Tedd Deireadh</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/kaer-morhen.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>Kaer Morhen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/duchy-toussaint-blood-and-wine.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>The Duchy of Toussaint (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/atlas/fablesphere-map-blood-and-wine.html\" data-link-type=\"map\" target=\"_blank\">\
					<span><span>The Fablesphere (Blood and Wine)</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Introduction and Characters</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/introduction.html\">\
					<span><span>Introduction</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-witchers-of-kaer-morhen.html\">\
					<span><span>The Witchers Of Kaer Morhen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/sorceresses-of-the-lodge.html\">\
					<span><span>Sorceresses Of The Lodge</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/friends-of-the-witcher.html\">\
					<span><span>Friends Of The Witcher</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-nilfgaardians.html\">\
					<span><span>The Nilfgaardians</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-redanians.html\">\
					<span><span>The Redanians</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-zealots-of-novigrad.html\">\
					<span><span>The Zealots Of Novigrad</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-big-four-of-novigrad.html\">\
					<span><span>The Big Four of Novigrad</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-temerian-two.html\">\
					<span><span>The Temerian Two</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-downtrodden-and-deviant.html\">\
					<span><span>The Downtrodden And Deviant</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-oppressed-and-the-peasantry.html\">\
					<span><span>The Oppressed, And The Peasantry</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-islanders-of-skellige.html\">\
					<span><span>The Islanders Of Skellige</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/leaders-of-the-wild-hunt.html\">\
					<span><span>Leaders Of The Wild Hunt</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-borsodi-brothers-hos-dlc.html\">\
					<span><span>The Borsodi Brothers (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/a-quartet-of-criminals-hos-dlc.html\">\
					<span><span>A Quartet Of Criminals (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-von-everec-family-hos-dlc.html\">\
					<span><span>The Von Everec Family (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-warm-and-cold-hearted-hos-dlc.html\">\
					<span><span>The Warm- And Cold-Hearted (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/the-lords-and-ladies-of-beauclair-baw-dlc.html\">\
					<span><span>The Lords And Ladies Of Beauclair (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/introduction-and-characters/allies-and-beasts-of-beauclair-baw-dlc.html\">\
					<span><span>Allies And Beasts Of Beauclair (Blood and Wine)</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Videos</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/videos/witcher-archetypes.html\">\
					<span><span>Witcher Archetypes</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/videos/treasure-hunts.html\">\
					<span><span>Treasure Hunts</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/videos/scavenger-hunts.html\">\
					<span><span>Scavenger Hunts</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Training</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/main-menu.html\">\
					<span><span>Main Menu</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/difficulty-settings.html\">\
					<span><span>Difficulty Settings</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/in-game-hud.html\">\
					<span><span>In-Game HUD</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/controls.html\">\
					<span><span>Controls</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/movement.html\">\
					<span><span>Movement</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/reactions-and-interactions.html\">\
					<span><span>Reactions And Interactions</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/mapping-and-points-of-interest.html\">\
					<span><span>Mapping And Points Of Interest</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/items-and-equipment.html\">\
					<span><span>Items And Equipment</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/potions-bombs-and-oils.html\">\
					<span><span>Potions, Bombs, And Oils</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/basic-alchemy.html\">\
					<span><span>Basic Alchemy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/alchemic-creations.html\">\
					<span><span>Alchemic Creations</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/armorers-and-blacksmiths.html\">\
					<span><span>Armorers And Blacksmiths</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/upgrades-glyphs-and-runestones.html\">\
					<span><span>Upgrades (Glyphs And Runestones)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/the-ofieri-runewright.html\">\
					<span><span>The Ofieri Runewright</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/shops-merchants-and-economy.html\">\
					<span><span>Shops, Merchants, and Economy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/combat.html\">\
					<span><span>Combat</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/character-abilities-and-mutations.html\">\
					<span><span>Character Abilities And Mutations</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/ability-tree-strategies.html\">\
					<span><span>Ability Tree Strategies</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/training/witcher-archetypes.html\">\
					<span><span>Witcher Archetypes</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Gwent</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/gwent-overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/introduction-to-the-game.html\">\
					<span><span>Introduction To The Game</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/who-plays-gwent.html\">\
					<span><span>Who Plays Gwent?</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/basics-of-gwent.html\">\
					<span><span>Basics Of Gwent</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/deck-building.html\">\
					<span><span>Deck Building</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/card-unit-and-ability-types.html\">\
					<span><span>Card Unit and Ability Types</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/deck-building-and-factions-advanced-tactics.html\">\
					<span><span>Deck Building and Factions: Advanced Tactics</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/gwent-card-type-and-abilities-table.html\">\
					<span><span>Gwent: Card Type and Abilities Table</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/a-complete-card-checklist.html\">\
					<span><span>A Complete Card Checklist</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/special-cards-13.html\">\
					<span><span>Special Cards (13)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/weather-cards-15.html\">\
					<span><span>Weather Cards (15)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/neutral-cards-16.html\">\
					<span><span>Neutral Cards (16)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/monsters-deck.html\">\
					<span><span>Monsters Deck</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/nilfgaardian-empire-deck.html\">\
					<span><span>Nilfgaardian Empire Deck</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/northern-realms-deck.html\">\
					<span><span>Northern Realms Deck</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/scoiatael-deck.html\">\
					<span><span>Scoia’tael Deck</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/skellige-clans-deck.html\">\
					<span><span>Skellige Clans Deck</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/complete-card-checklist-chart.html\">\
					<span><span>Complete Card Checklist Chart</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/the-gwentlefolk-of-the-northern-realms.html\">\
					<span><span>The Gwentlefolk Of The Northern Realms</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/the-gwentlefolk-of-toussaint.html\">\
					<span><span>The Gwentlefolk Of Toussaint</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent/merchants-of-the-northern-realms.html\">\
					<span><span>Merchants Of The Northern Realms</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Quest Walkthrough: Prologue</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/quest-guidance.html\">\
					<span><span>Quest Guidance</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-kaer-morhen.html\">\
					<span><span>Main Quest: Kaer Morhen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-lilac-and-gooseberries.html\">\
					<span><span>Main Quest: Lilac and Gooseberries</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard.html\">\
					<span><span>Main Quest: The Beast of White Orchard</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/secondary-quest-on-deaths-bed.html\">\
					<span><span>Secondary Quest: On Death&#39;s Bed</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-beast-of-white-orchard-continued.html\">\
					<span><span>Main Quest: The Beast of White Orchard (continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-lilac-and-gooseberries-continued.html\">\
					<span><span>Main Quest: Lilac and Gooseberries (continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-the-incident-at-white-orchard.html\">\
					<span><span>Main Quest: The Incident at White Orchard</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-prologue/main-quest-imperial-audience.html\">\
					<span><span>Main Quest: Imperial Audience</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Quest Walkthrough: Act I (Velen)</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-nilfgaardian-connection.html\">\
					<span><span>Main Quest: The Nilfgaardian Connection</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-bloody-baron.html\">\
					<span><span>Main Quest: Bloody Baron</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-the-king-of-the-wolves.html\">\
					<span><span>Main Quest: Ciri&#39;s Story: The King of the Wolves</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters.html\">\
					<span><span>Main Quest: Family Matters</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-ciris-room.html\">\
					<span><span>Secondary Quest: Ciri&#39;s Room</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-part-2.html\">\
					<span><span>Main Quest: Family Matters (Part 2)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-the-race.html\">\
					<span><span>Main Quest: Ciri&#39;s Story: The Race</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-out-of-the-shadows.html\">\
					<span><span>Main Quest: Ciri&#39;s Story: Out of the Shadows</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-hunting-a-witch.html\">\
					<span><span>Main Quest: Hunting a Witch</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-family-matters-continued.html\">\
					<span><span>Main Quest: Family Matters (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-a-princess-in-distress.html\">\
					<span><span>Main Quest: A Princess in Distress</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-wandering-in-the-dark.html\">\
					<span><span>Main Quest: Wandering in the Dark</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-magic-lamp.html\">\
					<span><span>Secondary Quest: Magic Lamp</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ladies-of-the-wood.html\">\
					<span><span>Main Quest: Ladies of the Wood</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-whispering-hillock.html\">\
					<span><span>Main Quest: The Whispering Hillock</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-the-ladies-of-the-wood-continued.html\">\
					<span><span>Main Quest: The Ladies of the Wood (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/main-quest-ciris-story-fleeing-the-bog.html\">\
					<span><span>Main Quest: Ciri&#39;s Story: Fleeing the Bog</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-an-invitation-from-keira-metz-and-a-towerful-of-mice.html\">\
					<span><span>Secondary Quest: An Invitation from Keira Metz and A Towerful of Mice</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-a-favor-for-a-friend.html\">\
					<span><span>Secondary Quest: A Favor for a Friend</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-for-the-advancement-of-learning.html\">\
					<span><span>Secondary Quest: For the Advancement of Learning</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-the-fall-of-the-house-of-reardon.html\">\
					<span><span>Secondary Quest: The Fall of the House of Reardon</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-ghosts-of-the-past.html\">\
					<span><span>Secondary Quest: Ghosts of the Past</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-velen/secondary-quest-return-to-crookback-bog.html\">\
					<span><span>Secondary Quest: Return to Crookback Bog</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Quest Walkthrough: Act I (Novigrad)</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-pyres-of-novigrad.html\">\
					<span><span>Main Quest: Pyres of Novigrad</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-novigrad-dreaming.html\">\
					<span><span>Main Quest: Novigrad Dreaming</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-broken-flowers.html\">\
					<span><span>Main Quest: Broken Flowers</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior.html\">\
					<span><span>Main Quest: Get Junior</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-the-gangs-of-novigrad.html\">\
					<span><span>Secondary Quest: The Gangs of Novigrad</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued.html\">\
					<span><span>Main Quest: Get Junior (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-honor-among-thieves.html\">\
					<span><span>Secondary Quest: Honor Among Thieves</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued2.html\">\
					<span><span>Main Quest: Get Junior (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-ciris-story-visiting-junior.html\">\
					<span><span>Main Quest: Ciri&#39;s Story: Visiting Junior</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-get-junior-continued3.html\">\
					<span><span>Main Quest: Get Junior (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-a-favor-for-radovid.html\">\
					<span><span>Main Quest: A Favor for Radovid</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-count-reuvens-treasure.html\">\
					<span><span>Main Quest: Count Reuven&#39;s Treasure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-the-plays-the-thing.html\">\
					<span><span>Main Quest: The Play&#39;s The Thing</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-a-poet-under-pressure.html\">\
					<span><span>Main Quest: A Poet Under Pressure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/main-quest-ciris-story-breakneck-speed.html\">\
					<span><span>Main Quest: Ciri&#39;s Story: Breakneck Speed</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-cabaret.html\">\
					<span><span>Secondary Quest: Cabaret</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-carnal-sins.html\">\
					<span><span>Secondary Quest: Carnal Sins</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-dangerous-game.html\">\
					<span><span>Secondary Quest: A Dangerous Game</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-matter-of-life-and-death.html\">\
					<span><span>Secondary Quest: A Matter of Life and Death</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-novigrad-closed-city.html\">\
					<span><span>Secondary Quest: Novigrad, Closed City</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-now-or-never.html\">\
					<span><span>Secondary Quest: Now or Never</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-an-eye-for-an-eye.html\">\
					<span><span>Secondary Quest: An Eye for an Eye</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-a-deadly-plot.html\">\
					<span><span>Secondary Quest: A Deadly Plot</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-novigrad/secondary-quest-redanias-most-wanted.html\">\
					<span><span>Secondary Quest: Redania&#39;s Most Wanted</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Quest Walkthrough: Act I (Skellige)</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-destination-skellige.html\">\
					<span><span>Main Quest: Destination: Skellige</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-king-is-deadlong-live-the-king.html\">\
					<span><span>Main Quest: The King is Dead. Long Live the King</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-echoes-of-the-past.html\">\
					<span><span>Main Quest: Echoes of the Past</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-missing-persons.html\">\
					<span><span>Main Quest: Missing Persons</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-nameless.html\">\
					<span><span>Main Quest: Nameless</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-the-calm-before-the-storm.html\">\
					<span><span>Main Quest: The Calm Before the Storm</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/main-quest-nameless-continued.html\">\
					<span><span>Main Quest: Nameless (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-mysterious-passenger.html\">\
					<span><span>Secondary Quest: The Mysterious Passenger</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-last-wish.html\">\
					<span><span>Secondary Quest: The Last Wish</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-the-lord-of-undvik.html\">\
					<span><span>Secondary Quest: The Lord of Undvik</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-possession.html\">\
					<span><span>Secondary Quest: Possession</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-kings-gambit.html\">\
					<span><span>Secondary Quest: King&#39;s Gambit</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-i-skellige/secondary-quest-coronation.html\">\
					<span><span>Secondary Quest: Coronation</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Quest Walkthrough: Act II</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-ugly-baby.html\">\
					<span><span>Main Quest: Ugly Baby</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-disturbance.html\">\
					<span><span>Main Quest: Disturbance</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-to-bait-a-forktail.html\">\
					<span><span>Main Quest: To Bait a Forktail</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-final-trial.html\">\
					<span><span>Main Quest: The Final Trial</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-no-place-like-home.html\">\
					<span><span>Main Quest: No Place Like Home</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-va-fail-elaine.html\">\
					<span><span>Main Quest: Va Fail, Elaine</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms.html\">\
					<span><span>Secondary Quest: Brothers in Arms</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-nilfgaard.html\">\
					<span><span>Secondary Quest: Brothers in Arms: Nilfgaard</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-velen.html\">\
					<span><span>Secondary Quest: Brothers in Arms: Velen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-novigrad.html\">\
					<span><span>Secondary Quest: Brothers in Arms: Novigrad</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/secondary-quest-brothers-in-arms-skellige.html\">\
					<span><span>Secondary Quest: Brothers in Arms: Skellige</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-isle-of-mists.html\">\
					<span><span>Main Quest: The Isle of Mists</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-the-battle-of-kaer-morhen.html\">\
					<span><span>Main Quest: The Battle of Kaer Morhen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-ii/main-quest-blood-on-the-battlefield.html\">\
					<span><span>Main Quest: Blood on the Battlefield</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Quest Walkthrough: Act III</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-bald-mountain.html\">\
					<span><span>Main Quest: Bald Mountain</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-final-preparations.html\">\
					<span><span>Main Quest: Final Preparations</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-blindingly-obvious.html\">\
					<span><span>Main Quest: Blindingly Obvious</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-a-final-kindness.html\">\
					<span><span>Secondary Quest: A Final Kindness</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-great-escape.html\">\
					<span><span>Main Quest: The Great Escape</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-payback.html\">\
					<span><span>Main Quest: Payback</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-final-preparations-continued.html\">\
					<span><span>Main Quest: Final Preparations (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-it-takes-three-to-tango.html\">\
					<span><span>Secondary Quest: It Takes Three to Tango</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-through-time-and-space.html\">\
					<span><span>Main Quest: Through Time And Space</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/secondary-quest-reason-of-state.html\">\
					<span><span>Secondary Quest: Reason of State</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-battle-preparations.html\">\
					<span><span>Main Quest: Battle Preparations</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone.html\">\
					<span><span>Main Quest: The Sunstone</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-battle-preparations-continued.html\">\
					<span><span>Main Quest: Battle Preparations (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-veni-vidi-vigo.html\">\
					<span><span>Main Quest: Veni Vidi Vigo</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-the-sunstone-continued.html\">\
					<span><span>Main Quest: The Sunstone (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-child-of-the-elder-blood.html\">\
					<span><span>Main Quest: Child of the Elder Blood</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-skjalls-grave.html\">\
					<span><span>Main Quest: Skjall&#39;s Grave</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-on-thin-ice.html\">\
					<span><span>Main Quest: On Thin Ice</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/quest-walkthrough-act-iii/main-quest-tedd-deireadh-the-final-age.html\">\
					<span><span>Main Quest: Tedd Deireadh, The Final Age</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Epilogue And Endings</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/epilogue-and-endings/author-note.html\">\
					<span><span>Author Note</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-i.html\">\
					<span><span>Something Ends, Something Begins (I)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-ii.html\">\
					<span><span>Something Ends, Something Begins (II)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/epilogue-and-endings/something-ends-something-begins-iii.html\">\
					<span><span>Something Ends, Something Begins (III)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/epilogue-and-endings/main-quest-endings.html\">\
					<span><span>Main Quest: Endings</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Episode 1: Main Quests: Hearts Of Stone</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/evils-first-soft-touches.html\">\
					<span><span>Evil’s First Soft Touches</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/dead-mans-party.html\">\
					<span><span>Dead Man’s Party</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/shanis-quest-a-midnight-clear.html\">\
					<span><span>Shani’s Quest: A Midnight Clear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-1.html\">\
					<span><span>Open Sesame (Part 1)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-breaking-and-entering.html\">\
					<span><span>Open Sesame: Breaking And Entering</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-the-safecracker.html\">\
					<span><span>Open Sesame: The Safecracker</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-witcher-seasonings.html\">\
					<span><span>Open Sesame: Witcher Seasonings</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/open-sesame-part-2.html\">\
					<span><span>Open Sesame (Part 2)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/scenes-from-a-marriage.html\">\
					<span><span>Scenes From a Marriage</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-1-main-quests-hearts-of-stone/whatever-a-man-soweth.html\">\
					<span><span>Whatever A Man Soweth…</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Episode 2: Main Quests: Blood And Wine</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/envoys-wineboys.html\">\
					<span><span>Envoys, Wineboys</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-beast-of-toussaint.html\">\
					<span><span>The Beast of Toussaint</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-run.html\">\
					<span><span>Blood Run</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/la-cage-au-fou.html\">\
					<span><span>La Cage Au Fou</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/where-children-toil-toys-waste-away.html\">\
					<span><span>Where Children Toil, Toys Waste Away</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/wine-is-sacred.html\">\
					<span><span>Wine Is Sacred</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-man-from-cintra.html\">\
					<span><span>The Man From Cintra</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/capture-the-castle.html\">\
					<span><span>Capture The Castle</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/the-night-of-long-fangs-part-1.html\">\
					<span><span>The Night Of Long Fangs (Part 1)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/blood-simple.html\">\
					<span><span>Blood Simple</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/night-of-the-long-fangs-part-2.html\">\
					<span><span>Night Of The Long Fangs (Part 2)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale.html\">\
					<span><span>Beyond Hill And Dale…</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/contract-duck-duck-goosed.html\">\
					<span><span>Contract: Duck, Duck, Goosed!</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/beyond-hill-and-dale-cont.html\">\
					<span><span>Beyond Hill And Dale… (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/what-lies-unseen.html\">\
					<span><span>What Lies Unseen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/tesham-mutna.html\">\
					<span><span>Tesham Mutna</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/burlap-is-the-new-stripe.html\">\
					<span><span>Burlap Is The New Stripe</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/secondary-quest-the-perks-of-being-a-jailbird.html\">\
					<span><span>Secondary Quest: The Perks Of Being A Jailbird</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/pomp-and-strange-circumstance.html\">\
					<span><span>Pomp And Strange Circumstance</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/episode-2-main-quests-blood-and-wine/be-it-ever-so-humble.html\">\
					<span><span>Be It Ever So Humble</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Secondary Quests</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/available-quests.html\">\
					<span><span>Available Quests</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/secondary-quests-chart.html\">\
					<span><span>Secondary Quests Chart</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/missing-in-action.html\">\
					<span><span>Missing In Action</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/precious-cargo.html\">\
					<span><span>Precious Cargo</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-frying-pan-spick-and-span.html\">\
					<span><span>A Frying Pan, Spick And Span</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/twisted-firestarter.html\">\
					<span><span>Twisted Firestarter</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/faithful-friend.html\">\
					<span><span>Faithful Friend</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/deadly-crossing-i.html\">\
					<span><span>Deadly Crossing (I)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/defender-of-the-faith-i.html\">\
					<span><span>Defender Of The Faith (I)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/face-me-if-you-dare.html\">\
					<span><span>Face Me If You Dare!*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/forefathers-eve.html\">\
					<span><span>Forefather’s Eve</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/highway-robbery.html\">\
					<span><span>Highway Robbery*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/last-rites.html\">\
					<span><span>Last Rites</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/looters-i.html\">\
					<span><span>Looters (I)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/master-armorers.html\">\
					<span><span>Master Armorers</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/contract-components-for-an-armorer.html\">\
					<span><span>Contract: Components For An Armorer</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/master-armorers-continued.html\">\
					<span><span>Master Armorers (Continued)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/where-the-cat-and-wolf-play.html\">\
					<span><span>Where The Cat And Wolf Play…</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/secondary-quests-take-what-you-want.html\">\
					<span><span>Secondary Quests: Take What You Want</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wild-at-heart.html\">\
					<span><span>Wild At Heart</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/harassing-a-troll.html\">\
					<span><span>Harassing A Troll*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/at-the-mercy-of-strangers.html\">\
					<span><span>At The Mercy Of Strangers*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/bitter-harvest.html\">\
					<span><span>Bitter Harvest</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/caravan-attack.html\">\
					<span><span>Caravan Attack*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/deadly-crossing-ii.html\">\
					<span><span>Deadly Crossing (II)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/death-by-fire.html\">\
					<span><span>Death By Fire</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/fake-papers.html\">\
					<span><span>Fake Papers</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/funeral-pyres.html\">\
					<span><span>Funeral Pyres</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/looters-ii.html\">\
					<span><span>Looters (II)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/mans-best-friend.html\">\
					<span><span>Man’s Best Friend*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/thou-shalt-not-pass.html\">\
					<span><span>Thou Shalt Not Pass</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-volunteer.html\">\
					<span><span>The Volunteer</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/fools-gold.html\">\
					<span><span>Fool’s Gold</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/hazardous-goods.html\">\
					<span><span>Hazardous Goods</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/witcher-wannabe.html\">\
					<span><span>Witcher Wannabe</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/looters-iii.html\">\
					<span><span>Looters (III)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-truth-is-in-the-stars.html\">\
					<span><span>The Truth Is In The Stars</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/lynch-mob.html\">\
					<span><span>Lynch Mob</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/loves-cruel-snares.html\">\
					<span><span>Love’s Cruel Snares?</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-dogs-life.html\">\
					<span><span>A Dog’s Life</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/defender-of-the-faith-ii.html\">\
					<span><span>Defender Of The Faith (II)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/highwaymans-cache.html\">\
					<span><span>Highwayman’s Cache*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-greedy-god.html\">\
					<span><span>A Greedy God</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/blood-ties.html\">\
					<span><span>Blood Ties</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/deadly-crossing-iii.html\">\
					<span><span>Deadly Crossing (III)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-dwarven-document-dilemma.html\">\
					<span><span>The Dwarven Document Dilemma</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/following-the-thread.html\">\
					<span><span>Following The Thread</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/karmic-justice.html\">\
					<span><span>Karmic Justice*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/witch-hunter-raids.html\">\
					<span><span>Witch Hunter Raids*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-feast-for-crows.html\">\
					<span><span>A Feast For Crows</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-flame-of-hatred.html\">\
					<span><span>The Flame Of Hatred*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/message-from-an-old-friend.html\">\
					<span><span>Message From An Old Friend</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/of-swords-and-dumplings.html\">\
					<span><span>Of Swords And Dumplings</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/racists-of-novigrad-i-and-ii.html\">\
					<span><span>Racists of Novigrad (I and II)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/suspicious-shakedown.html\">\
					<span><span>Suspicious Shakedown*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/black-pearl.html\">\
					<span><span>Black Pearl</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/drunken-rabble.html\">\
					<span><span>Drunken Rabble*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/hey-you-wanna-look-at-my-stuff.html\">\
					<span><span>Hey, You Wanna Look At My Stuff?</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/strumpet-in-distress.html\">\
					<span><span>Strumpet In Distress*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/out-on-your-arse.html\">\
					<span><span>Out On Your Arse!</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-walk-on-the-waterfront.html\">\
					<span><span>A Walk On The Waterfront</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/warehouse-of-woe.html\">\
					<span><span>Warehouse Of Woe</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/of-dairy-and-darkness.html\">\
					<span><span>Of Dairy And Darkness</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/fencing-lessons.html\">\
					<span><span>Fencing Lessons</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/hidden-messages-of-the-nilfgaardian-kind.html\">\
					<span><span>Hidden Messages Of The Nilfgaardian Kind</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/never-trust-children-i.html\">\
					<span><span>Never Trust Children (I)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-nobleman-statuette.html\">\
					<span><span>The Nobleman Statuette</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-soldier-statuette.html\">\
					<span><span>The Soldier Statuette</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-tome-entombed.html\">\
					<span><span>A Tome Entombed</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-barnful-of-trouble.html\">\
					<span><span>A Barnful Of Trouble</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/empty-coop.html\">\
					<span><span>Empty Coop</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/little-red.html\">\
					<span><span>Little Red</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/novigrad-hospitality.html\">\
					<span><span>Novigrad Hospitality</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/spooked-mare.html\">\
					<span><span>Spooked Mare</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/strangers-in-the-night.html\">\
					<span><span>Strangers In The Night*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-warm-welcome.html\">\
					<span><span>A Warm Welcome*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/avid-collector-hos.html\">\
					<span><span>Avid Collector (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/enchanting-start-up-costs-hos.html\">\
					<span><span>Enchanting: Start-Up Costs (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/enchanting-quality-has-its-price-hos.html\">\
					<span><span>Enchanting: Quality Has Its Price (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/rose-on-a-red-field-hos.html\">\
					<span><span>Rose on a Red Field (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-price-of-passage.html\">\
					<span><span>The Price Of Passage*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-most-truest-of-basilisks.html\">\
					<span><span>The Most Truest Of Basilisks*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/rough-neighborhood.html\">\
					<span><span>Rough Neighborhood</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-taxman-cometh-hos.html\">\
					<span><span>The Taxman Cometh (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/without-a-trace-hos.html\">\
					<span><span>Without A Trace (Hearts of Stone)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/abandoned-sawmill.html\">\
					<span><span>Abandoned Sawmill</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/armed-assault.html\">\
					<span><span>Armed Assault</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-bards-beloved.html\">\
					<span><span>A Bard’s Beloved</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/brave-fools-die-young.html\">\
					<span><span>Brave Fools Die Young</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/call-of-the-wild.html\">\
					<span><span>Call Of The Wild*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/crime-and-punishment.html\">\
					<span><span>Crime And Punishment</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-family-blade.html\">\
					<span><span>The Family Blade</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/farting-trolls.html\">\
					<span><span>Farting Trolls*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/finders-keepers.html\">\
					<span><span>Finders Keepers</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/from-a-land-far-far-away.html\">\
					<span><span>From A Land Far, Far Away</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-hallowed-horn.html\">\
					<span><span>A Hallowed Horn</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/hard-times.html\">\
					<span><span>Hard Times</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/in-the-heart-of-the-woods.html\">\
					<span><span>In The Heart Of The Woods</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/never-trust-children-ii.html\">\
					<span><span>Never Trust Children (II)*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-nithing.html\">\
					<span><span>The Nithing</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/peace-disturbed.html\">\
					<span><span>Peace Disturbed</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/practicum-in-advanced-alchemy.html\">\
					<span><span>Practicum In Advanced Alchemy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-sad-tale-of-the-grossbart-brothers.html\">\
					<span><span>The Sad Tale Of The Grossbart Brothers</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/shock-therapy.html\">\
					<span><span>Shock Therapy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/sirens-call.html\">\
					<span><span>Siren’s Call*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/stranger-in-a-strange-land.html\">\
					<span><span>Stranger In A Strange Land</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-cave-of-dreams.html\">\
					<span><span>The Cave Of Dreams</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/taken-as-a-lass.html\">\
					<span><span>Taken As A Lass</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/an-unpaid-debt.html\">\
					<span><span>An Unpaid Debt</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/woe-is-me.html\">\
					<span><span>Woe Is Me*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/worthy-of-trust.html\">\
					<span><span>Worthy Of Trust</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/yustianna-disturbed.html\">\
					<span><span>Yustianna Disturbed*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/for-fame-and-glory.html\">\
					<span><span>For Fame And Glory</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/in-wolfs-clothing.html\">\
					<span><span>In Wolf’s Clothing</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/master-of-the-arena.html\">\
					<span><span>Master Of The Arena</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/free-spirit.html\">\
					<span><span>Free Spirit</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-path-of-warriors.html\">\
					<span><span>The Path Of Warriors</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-tower-outta-nowheres.html\">\
					<span><span>The Tower Outta Nowheres</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/flesh-for-sale.html\">\
					<span><span>Flesh For Sale</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-four-faces-of-hemdall.html\">\
					<span><span>The Four Faces Of Hemdall*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/iron-maiden.html\">\
					<span><span>Iron Maiden</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-price-of-honor.html\">\
					<span><span>The Price Of Honor</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/bastion.html\">\
					<span><span>Bastion</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/berengars-blade.html\">\
					<span><span>Berengar’s Blade</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/greenhouse-effect.html\">\
					<span><span>Greenhouse Effect</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/monster-slayer.html\">\
					<span><span>Monster Slayer</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/trail-of-echoes.html\">\
					<span><span>Trail Of Echoes*</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-witchers-forge.html\">\
					<span><span>The Witchers’ Forge</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-hunger-game-baw.html\">\
					<span><span>The Hunger Game (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-knights-tales-baw.html\">\
					<span><span>A Knight’s Tales (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/no-place-like-home-baw.html\">\
					<span><span>No Place Like Home (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-warble-of-a-smitten-knight-baw.html\">\
					<span><span>The Warble Of A Smitten Knight (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-1-baw.html\">\
					<span><span>Wine Wars: Belgaard, Part 1 (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wine-wars-coronata-baw.html\">\
					<span><span>Wine Wars: Coronata (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/coin-doesnt-stink-baw.html\">\
					<span><span>Coin Doesn’t Stink (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wine-wars-vermentino-baw.html\">\
					<span><span>Wine Wars: Vermentino (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/dont-take-candy-from-a-stranger-baw.html\">\
					<span><span>Don’t Take Candy From A Stranger (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wine-wars-the-deus-in-the-machina-baw.html\">\
					<span><span>Wine Wars: The Deus In The Machina (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wine-wars-consorting-baw.html\">\
					<span><span>Wine Wars: Consorting (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/wine-wars-belgaard-part-2-baw.html\">\
					<span><span>Wine Wars: Belgaard (Part 2) (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/the-words-of-the-prophets-are-written-on-sarcophagi-baw.html\">\
					<span><span>The Words Of The Prophets Are Written On Sarcophagi (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/big-feet-to-fill-baw.html\">\
					<span><span>Big Feet To Fill (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/father-knows-worst-baw.html\">\
					<span><span>Father Knows Worst (Baw)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-first-group-baw.html\">\
					<span><span>Big Feet To Fill: The First Group (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-second-group-baw.html\">\
					<span><span>Big Feet To Fill: The Second Group (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-third-group-baw.html\">\
					<span><span>Big Feet To Fill: The Third Group (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-fourth-group-baw.html\">\
					<span><span>Big Feet To Fill: The Fourth Group (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/big-feet-to-fill-the-fifth-group-baw.html\">\
					<span><span>Big Feet To Fill: The Fifth Group (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/there-can-be-only-one-baw.html\">\
					<span><span>There Can Be Only One (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/knight-for-hire-baw.html\">\
					<span><span>Knight For Hire (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/goodness-gracious-great-balls-of-granite-baw.html\">\
					<span><span>Goodness, Gracious, Great Balls Of Granite! (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/of-sheers-and-a-witcher-i-sing-baw.html\">\
					<span><span>Of Sheers And A Witcher I Sing (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/paperchase.html\">\
					<span><span>Paperchase</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/a-portrait-of-the-witcher-as-an-old-man-baw.html\">\
					<span><span>A Portrait Of The Witcher As An Old Man (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/till-death-do-you-part-baw.html\">\
					<span><span>Till Death Do You Part (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/turn-and-face-the-strange-baw.html\">\
					<span><span>Turn And Face The Strange (Blood and Wine)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/secondary-quests/extreme-cosplay-baw.html\">\
					<span><span>Extreme Cosplay (Blood and Wine)</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Gwent Quests</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/overview-a-game-within-a-game.html\">\
					<span><span>Overview: A Game Within A Game</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/available-quests.html\">\
					<span><span>Available Quests</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-playing-innkeeps.html\">\
					<span><span>Gwent: Playing Innkeeps</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-velen-players.html\">\
					<span><span>Gwent: Velen Players</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-big-city-players.html\">\
					<span><span>Gwent: Big City Players</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-old-pals.html\">\
					<span><span>Gwent: Old Pals</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-playing-thaler.html\">\
					<span><span>Gwent: Playing Thaler</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-skellige-style.html\">\
					<span><span>Gwent: Skellige Style</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-secondary-quest-high-stakes.html\">\
					<span><span>Gwent: Secondary Quest: High Stakes</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-collect-em-all.html\">\
					<span><span>Gwent: Collect &#39;Em All</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-quests-the-duchy-of-toussaint.html\">\
					<span><span>Gwent Quests: The Duchy Of Toussaint</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-to-everythingturn-turn-tournament.html\">\
					<span><span>Gwent: To Everything—Turn, Turn, Tournament</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/gwent-quests/gwent-never-fear-skelliges-here.html\">\
					<span><span>Gwent: Never Fear, Skellige’s Here!</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>The Heroes’ Pursuits</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/the-heroes-pursuits/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/the-heroes-pursuits/fists-of-fury.html\">\
					<span><span>Fists Of Fury</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/the-heroes-pursuits/horse-races.html\">\
					<span><span>Horse Races</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Witcher Contracts</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-devil-by-the-well.html\">\
					<span><span>Contract: Devil By The Well</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-beast-of-honorton.html\">\
					<span><span>Contract: The Beast Of Honorton</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-jenny-o-the-woods.html\">\
					<span><span>Contract: Jenny O’ The Woods</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-merry-widow.html\">\
					<span><span>Contract: The Merry Widow</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-missing-brother.html\">\
					<span><span>Contract: Missing Brother</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-mysterious-tracks.html\">\
					<span><span>Contract: Mysterious Tracks</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-mystery-of-the-byways-murders.html\">\
					<span><span>Contract: The Mystery Of The Byways Murders</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-patrol-gone-missing.html\">\
					<span><span>Contract: Patrol Gone Missing</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-phantom-of-the-trade-route.html\">\
					<span><span>Contract: Phantom Of The Trade Route</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-shrieker.html\">\
					<span><span>Contract: Shrieker</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-swamp-thing.html\">\
					<span><span>Contract: Swamp Thing</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-woodland-beast.html\">\
					<span><span>Contract: Woodland Beast</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-apiarian-phantom.html\">\
					<span><span>Contract: The Apiarian Phantom</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-creature-from-oxenfurt-forest.html\">\
					<span><span>Contract: The Creature From Oxenfurt Forest</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-deadly-delights.html\">\
					<span><span>Contract: Deadly Delights</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-doors-slamming-shut.html\">\
					<span><span>Contract: Doors Slamming Shut</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-an-elusive-thief.html\">\
					<span><span>Contract: An Elusive Thief</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-lord-of-the-wood.html\">\
					<span><span>Contract: Lord Of The Wood</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-oxenfurt-drunk.html\">\
					<span><span>Contract: The Oxenfurt Drunk</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-white-lady.html\">\
					<span><span>Contract: The White Lady</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-dragon.html\">\
					<span><span>Contract: Dragon</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-here-comes-the-groom.html\">\
					<span><span>Contract: Here Comes The Groom</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-missing-miners.html\">\
					<span><span>Contract: Missing Miners</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-missing-son.html\">\
					<span><span>Contract: Missing Son</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-muire-dyaeblen.html\">\
					<span><span>Contract: Muire D’yaeblen</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-phantom-of-eldberg.html\">\
					<span><span>Contract: The Phantom Of Eldberg</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/witcher-contract-skelliges-most-wanted.html\">\
					<span><span>Witcher Contract: Skellige’s Most Wanted</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-waylaid-transport.html\">\
					<span><span>Contract: Waylaid Transport</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-mutual-of-beauclairs-wild-kingdom.html\">\
					<span><span>Contract: Mutual Of Beauclair’s Wild Kingdom</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-big-game-hunter.html\">\
					<span><span>Contract: Big Game Hunter</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-equine-phantoms.html\">\
					<span><span>Contract: Equine Phantoms</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-bovine-blues.html\">\
					<span><span>Contract: Bovine Blues</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-the-tufo-monster.html\">\
					<span><span>Contract: The Tufo Monster</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/contract-feet-cold-as-ice.html\">\
					<span><span>Contract: Feet Cold As Ice</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/vintners-contract-dun-tynne-hillside.html\">\
					<span><span>Vintner’s Contract: Dun Tynne Hillside</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/vintners-contract-rivecalme-storehouse.html\">\
					<span><span>Vintner’s Contract: Rivecalme Storehouse</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/vintners-contract-chuchote-cave.html\">\
					<span><span>Vintner’s Contract: Chuchote Cave</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/vintners-contract-griffin-in-the-vines.html\">\
					<span><span>Vintner’s Contract: Griffin-In-The-Vines</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/witcher-contracts/vintners-contract-cleaning-those-hard-to-reach-places.html\">\
					<span><span>Vintner’s Contract: Cleaning Those Hard-To-Reach Places</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Treasure Hunts</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/deserter-gold.html\">\
					<span><span>Deserter Gold</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/dirty-funds.html\">\
					<span><span>Dirty Funds</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/temerian-valuables.html\">\
					<span><span>Temerian Valuables</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grayrocks-an-unfortunate-turn-of-events.html\">\
					<span><span>Grayrocks: An Unfortunate Turn Of Events</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grayrocks-the-things-men-do-for-coin.html\">\
					<span><span>Grayrocks: The Things Men Do For Coin…</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grayrocks-dowry.html\">\
					<span><span>Grayrocks: Dowry</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grayrocks-blood-gold.html\">\
					<span><span>Grayrocks: Blood Gold</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grayrocks-tough-luck.html\">\
					<span><span>Grayrocks: Tough Luck</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grayrocks-lost-goods.html\">\
					<span><span>Grayrocks: Lost Goods</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/the-descent-out-of-the-frying-pan-into-the-fire.html\">\
					<span><span>The Descent: Out Of The Frying Pan, Into The Fire</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/the-descent-hidden-from-the-world.html\">\
					<span><span>The Descent: Hidden From The World</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/spitfire-bluff-sunken-treasure.html\">\
					<span><span>Spitfire Bluff: Sunken Treasure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/spitfire-bluff-a-costly-mistake.html\">\
					<span><span>Spitfire Bluff: A Costly Mistake</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/spitfire-bluff-queen-zuleykas-treasure.html\">\
					<span><span>Spitfire Bluff: Queen Zuleyka’s Treasure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/spitfire-bluff-a-plea-ignored.html\">\
					<span><span>Spitfire Bluff: A Plea Ignored</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/the-mire-dont-play-with-the-gods.html\">\
					<span><span>The Mire: Don’t Play With The Gods</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/the-mire-the-dead-have-no-defense.html\">\
					<span><span>The Mire: The Dead Have No Defense</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/the-miresunken-chest.html\">\
					<span><span>The Mire: Sunken Chest</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grassy-knoll-coast-of-wrecks.html\">\
					<span><span>Grassy Knoll: Coast Of Wrecks</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grassy-knoll-battlefield-loot.html\">\
					<span><span>Grassy Knoll: Battlefield Loot</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/grassy-knoll-the-cursed-chapel.html\">\
					<span><span>Grassy Knoll: The Cursed Chapel</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-a-dark-legacy.html\">\
					<span><span>Gustfields: A Dark Legacy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-the-drakenborg-redemption.html\">\
					<span><span>Gustfields: The Drakenborg Redemption</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfieldsfrom-ofiers-distant-shores.html\">\
					<span><span>Gustfields:from Ofier’s Distant Shores</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-the-royal-air-force.html\">\
					<span><span>Gustfields: The Royal Air Force</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-the-secret-life-of-count-romilly.html\">\
					<span><span>Gustfields: The Secret Life Of Count Romilly</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-a-surprise-inheritance.html\">\
					<span><span>Gustfields: A Surprise Inheritance</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-the-sword-famine-and-perfidy.html\">\
					<span><span>Gustfields: The Sword, Famine And Perfidy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/gustfields-tinker-hunter-soldier-spy.html\">\
					<span><span>Gustfields: Tinker, Hunter, Soldier, Spy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/ard-skellig-inheritance.html\">\
					<span><span>Ard Skellig: Inheritance</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/ard-skellig-freya-be-praised.html\">\
					<span><span>Ard Skellig: Freya Be Praised!</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/ard-skellig-x-marks-the-spot.html\">\
					<span><span>Ard Skellig: X Marks The Spot</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/ard-skellig-family-fortune.html\">\
					<span><span>Ard Skellig: Family Fortune</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/ard-skellig-pearls-of-the-coast.html\">\
					<span><span>Ard Skellig: Pearls Of The Coast</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/an-skellig-nilfgaardian-treasure.html\">\
					<span><span>An Skellig: Nilfgaardian Treasure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/undvik-precious-haul.html\">\
					<span><span>Undvik: Precious Haul</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/undvik-ruins-hidden-treasure-you-know.html\">\
					<span><span>Undvik: Ruins, Hidden Treasure, You Know…</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/undvik-shortcut.html\">\
					<span><span>Undvik: Shortcut</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/spikeroog-not-only-eagles-dare.html\">\
					<span><span>Spikeroog: Not Only Eagles Dare</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/snidhall-isle-unluckys-treasure.html\">\
					<span><span>Snidhall Isle: Unlucky’s Treasure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/faroe-hidden-in-the-depths.html\">\
					<span><span>Faroe: Hidden In The Depths</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/faroe-ironsides-treasure.html\">\
					<span><span>Faroe: Ironsides’ Treasure</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-the-last-exploits-of-selinas-gang.html\">\
					<span><span>Toussaint: The Last Exploits Of Selina’s Gang</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-what-was-this-about-again.html\">\
					<span><span>Toussaint: What Was This About Again?</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-curse-ofcarnarvona.html\">\
					<span><span>Toussaint: Curse of Carnarvona</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-around-the-world-in-eight-days.html\">\
					<span><span>Toussaint: Around The World In… Eight Days</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-the-black-widow.html\">\
					<span><span>Toussaint: The Black Widow</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-the-toussaint-prison-experiment.html\">\
					<span><span>Toussaint: The Toussaint Prison Experiment</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-the-suffering-of-young-francois.html\">\
					<span><span>Toussaint: The Suffering Of Young Francois</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-but-other-than-that-how-did-you-enjoy-the-play.html\">\
					<span><span>Toussaint: But Other Than That, How Did You Enjoy The Play?</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-the-inconstant-gardener.html\">\
					<span><span>Toussaint: The Inconstant Gardener</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-applied-escapology.html\">\
					<span><span>Toussaint: Applied Escapology</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-filbert-always-pays-his-debts.html\">\
					<span><span>Toussaint: Filbert Always Pays His Debts</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-waiting-for-goe-and-doh.html\">\
					<span><span>Toussaint: Waiting For Goe And Doh</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/treasure-hunts/toussaint-spoontaneous-profits.html\">\
					<span><span>Toussaint: Spoontaneous Profits!</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Scavenger Hunts</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/viper-school-gear.html\">\
					<span><span>Viper School Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/viper-school-gear-additional.html\">\
					<span><span>Viper School Gear (Additional)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/griffin-school-gear.html\">\
					<span><span>Griffin School Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/griffin-school-gear-basic.html\">\
					<span><span>Griffin School Gear (Basic)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-1-enhanced.html\">\
					<span><span>Griffin School Diagrams – Part 1 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-2-enhanced.html\">\
					<span><span>Griffin School Diagrams – Part 2 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-3-superior.html\">\
					<span><span>Griffin School Diagrams – Part 3 (Superior)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/griffin-school-diagrams-part-4-mastercrafted.html\">\
					<span><span>Griffin School Diagrams – Part 4 (Mastercrafted)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/cat-school-gear.html\">\
					<span><span>Cat School Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/cat-school-gear-basic.html\">\
					<span><span>Cat School Gear (Basic)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-1-enhanced.html\">\
					<span><span>Cat School Diagrams – Part 1 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-2-enhanced.html\">\
					<span><span>Cat School Diagrams – Part 2 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-3-superior.html\">\
					<span><span>Cat School Diagrams – Part 3 (Superior)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/cat-school-diagrams-part-4-mastercrafted.html\">\
					<span><span>Cat School Diagrams – Part 4 (Mastercrafted)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/bear-school-gear.html\">\
					<span><span>Bear School Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/bear-school-gear-basic.html\">\
					<span><span>Bear School Gear (Basic)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-1-enhanced.html\">\
					<span><span>Bear School Diagrams – Part 1 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-2-enhanced.html\">\
					<span><span>Bear School Diagrams – Part 2 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-3-superior.html\">\
					<span><span>Bear School Diagrams – Part 3 (Superior)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/bear-school-diagrams-part-4-mastercrafted.html\">\
					<span><span>Bear School Diagrams – Part 4 (Mastercrafted)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear.html\">\
					<span><span>Wolf School Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-basic.html\">\
					<span><span>Wolf School Gear (Basic)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-1-enhanced.html\">\
					<span><span>Wolf School Gear Upgrade Diagrams – Part 1 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-2-enhanced.html\">\
					<span><span>Wolf School Gear Upgrade Diagrams – Part 2 (Enhanced)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-3-superior.html\">\
					<span><span>Wolf School Gear Upgrade Diagrams – Part 3 (Superior)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-4-superior.html\">\
					<span><span>Wolf School Gear Upgrade Diagrams – Part 4 (Superior)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-5-mastercrafted.html\">\
					<span><span>Wolf School Gear Upgrade Diagrams – Part 5 (Mastercrafted)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/wolf-school-gear-upgrade-diagrams-part-6-mastercrafted.html\">\
					<span><span>Wolf School Gear Upgrade Diagrams – Part 6 (Mastercrafted)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/master-master-master-master.html\">\
					<span><span>Master Master Master Master!</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/grandmaster-griffin-gear.html\">\
					<span><span>Grandmaster Griffin Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/grandmaster-feline-gear.html\">\
					<span><span>Grandmaster Feline Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/grandmaster-wolven-gear.html\">\
					<span><span>Grandmaster Wolven Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/grandmaster-ursine-gear.html\">\
					<span><span>Grandmaster Ursine Gear</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/scavenger-hunts/grandmaster-manticore-gear.html\">\
					<span><span>Grandmaster Manticore Gear</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Appendices and Compendiums</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/appendices-and-compendiums/overview.html\">\
					<span><span>Overview</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/appendices-and-compendiums/bestiary.html\">\
					<span><span>Bestiary</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/appendices-and-compendiums/places-of-power.html\">\
					<span><span>Places Of Power</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/appendices-and-compendiums/carnal-knowledge.html\">\
					<span><span>Carnal Knowledge</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/appendices-and-compendiums/achievements-and-trophies.html\">\
					<span><span>Achievements And Trophies</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Inventory Data</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/introduction-witchers-tools.html\">\
					<span><span>Introduction to a Witcher&#39;s Tools</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/item-data.html\">\
					<span><span>Item Data</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/shop-items.html\">\
					<span><span>Shop Items</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/shop-locations.html\">\
					<span><span>Shop Locations</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/item-locations.html\">\
					<span><span>Item Locations</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/alchemy.html\">\
					<span><span>Alchemy</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/armor.html\">\
					<span><span>Armor</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/crafted-armor.html\">\
					<span><span>Armor (Crafted)</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/bolts.html\">\
					<span><span>Bolts</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/bombs.html\">\
					<span><span>Bombs</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/books.html\">\
					<span><span>Books</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/crossbows.html\">\
					<span><span>Crossbows</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/crafting-elements.html\">\
					<span><span>Crafting Elements</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/diagrams.html\">\
					<span><span>Diagrams</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/decoctions.html\">\
					<span><span>Decoctions</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/dyes.html\">\
					<span><span>Dyes</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/foods.html\">\
					<span><span>Foods</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/glyphs.html\">\
					<span><span>Glyphs</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/herbs.html\">\
					<span><span>Herbs</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/horse.html\">\
					<span><span>Horse</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/monsters.html\">\
					<span><span>Monsters</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/mutagens.html\">\
					<span><span>Mutagens</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/oils.html\">\
					<span><span>Oils</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/potions.html\">\
					<span><span>Potions</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/runestones.html\">\
					<span><span>Runestones</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/runewords-and-glyphwords.html\">\
					<span><span>Runewords and Glyphwords</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/trophies.html\">\
					<span><span>Trophies</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/steel-and-silver-swords.html\">\
					<span><span>Steel and Silver Swords</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/relic-weapons.html\">\
					<span><span>Relic Weapons</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/inventory-data/crafted-weapons.html\">\
					<span><span>Crafted Weapons</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
	<li>\
		<h3>Credits</h3>\
		<ul>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/credits/game-credits.html\">\
					<span><span>Game Credits</span></span>\
				</a>\
			</li>\
			<li class=\"portrait\">\
				<div class=\"image\" style=\"background-image: url($rootmedia/main-bg-witcher3-complete-thumbnail.jpg)\"></div>\
				<a href=\"$roothtml/credits/eguide-credits.html\">\
					<span><span>eGuide Credits</span></span>\
				</a>\
			</li>\
		</ul>\
	</li>\
</ul>';
  inner_html = inner_html.replace(/\$root/g, path);
  obj_id.innerHTML=inner_html;
}
