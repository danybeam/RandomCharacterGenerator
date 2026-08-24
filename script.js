
// Silhoutte and Shape
const Race = ["Human", "Elf", "Dwarf", "Half-foot", "Orc", "Dragonborn/Draconoid", "Hybrid"]
const BodyType = ["Short", "Tall", "Fat", "Thin", "Muscular", "Feeble"]
const Posture = ["Hunched", "Stiff", "Graceful", "Clumsy", "Confident", "Cowardly"]
const HeadShape = ["Sharp jaw", "Round", "Angular", "Square"]

// Hair and Face
const HairStyle = ["Buzz cut", "Mohawk", "Bald", "Short length", "Medium length", "Long hair (loose)", "Long hair (ponytail)", "Pigtails", "Single braid", "Multiple braids", "Cornrows", "Shave side"]
const EyeFeatures = ["Homochromia (same color eyes)", "Heterochromia (different color eyes)", "Sharp eyes", "Eye patch", "No eyes", "Cyclops eye", "One eye (eye patch optional)"]
const FacialHair = ["None", "Mustache", "Beard (trimmed)", "Beard (long)", "Beard (stubble)", "Goatee", "Mustache and beard (no goatee)", "Inspired by your dad", "Inspired by your mom", "Inspired by your grandma", "Inspired by your grandpa"]


// Color and Clothing
const ColorSchemeType = ["Discordant (any number of discordant hues)", "Complementary", "Analogous", "Split complementray", "Triadic", "Side complimentary", "Rectanlge tetradic", "Square tetradic", "Double split complementary (a.k.a. Pentagonal)"]
const ColorSchemeColor = ["Red", "Red-Orange", "Orange", "Orange-Yellow", "Yellow", "Yellow-Green", "Green", "Green-Blue", "Blue", "Blue-Purple", "Purple", "Black and White"]
const ClothingFit = ["Tight clothes", "Loose clothes", "Flowey", "Ragged", "Fancy", "Heavy", "Light"]
const Layers = ["None", "Vests", "Coat", "Cape", "Belt", "Holsters and/or Scabbards", "Protective"]

// Details and Accessories
const SignatureItems = ["None", "A cool hat", "Glasses", "Headphones (bonus pts. adapt it to ye olde times)", "Distance weapon (e.g. bows, guns, etc.)", "Short cutting weapon (e.g. a knife)", "Medium cutting weapon (e.g. sword)", "Long cutting weapon (e.g. a long sword)", "Short blunt weapon (e.g. a hammer)", "Long blunt weapon (e.g. Bo staff)", "A proffesor's hat"]
const BodyMarks = ["None", "Scars", "Piebaldism", "Freckles", "Tattoos", "Split tongue", "Vitiligio"]
const Props = ["None", "A wizzard staff (different from bo staff)", "An unusual tool", "An tool that matches their profession", "A canine pet", "A bird pet", "A feline pet", "A ghostly companion", "A spiritual companion (interpret 'spiritual' freely)"]
const Miscelanous = ["Race swap", "Nothing", "Insane", "Anachronistic", "Futuristic", "Primal", "Yes AND", "No BUT", "Gender swap"]
const MiscelanousExplanation = ["Reroll Race 3 times no takesy backsies.\nIf hybrid shows up in any of the three rolls you must hybridize the other two.\nIf hybrid shows more than once use it as a wild card. (result must still be a hybrid)", "Show me the concept of nothing or the void.", "Add something that makes me question their sanity.\nCrazy eyes, drool, unconventional items, anything.\nIt CAN override another prompt if it follows the rule of cool.", "Add an anachronism somewhere.\ne.g. Lasers in medieval  times, flint knives in the future, etc.", "Make it look like it belongs in the future", "Make it look like it belongs in the past", "Reroll your favorite answer and add both results to the requirements\ni.e. you MUST do both even if you don't like the re-roll", "Reroll your least favorite answer until it's something you like.\nCannot be ignored unless the category says 'None' but you only need to do the latest roll.", "Whatever gender you were thinking for your character, do the opposite (BE HONEST)\nTrans plot/background optional but always accepted"]


const partMap = [Race, BodyType, Posture, HeadShape, HairStyle, EyeFeatures, FacialHair, ColorSchemeType, ColorSchemeColor, ClothingFit, Layers, SignatureItems, BodyMarks, Props, Miscelanous];

function generateCharacterWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateCharacterWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  const elementExplanation = document.getElementById(`num${index}Explanation`);
  const arr = partMap[index];
  button.disabled = true;
  let count = 0;
  let explanationIndex = -1;
  const interval = setInterval(() => {
    explanationIndex = Math.floor(Math.random() * arr.length)
    
    element.textContent = arr[explanationIndex];
    if (index == 14) {
      elementExplanation.textContent = MiscelanousExplanation[explanationIndex];
    }

    count++;
    if (count > 20) {
      clearInterval(interval);
      button.disabled = false;
    }
  }, 20);
}
