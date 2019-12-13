var choicelist_defaultBotCent = Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function() { 
    var positionType = $gameMessage.choicePositionType(); 
    this.y = Graphics.boxHeight - this.windowHeight(); 
    this.width = this.windowWidth(); 
    this.height = this.windowHeight(); 
    switch (positionType) { 
        case 0: this.x = (Graphics.boxWidth - this.width) / 2; 
        break; 
        case 1: this.x = (Graphics.boxWidth - this.width) / 2; 
        break; 
        case 2: this.x = (Graphics.boxWidth - this.width) / 2; 
        break; 
    }
};