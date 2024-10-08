import { useState }from 'react';
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState();

    let tabContent = 'Please select a button';
  
    function clickHandler(selectedButton){
      setSelectedTopic(selectedButton)
      // console.log(tabContent);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs 
            ButtonsContainer="menu"
            buttons={
                <>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => clickHandler('components')}>Components
                </TabButton>

                {/*<TabButton label="Components"/>*/}
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => clickHandler('jsx')}>JSX
                </TabButton>

                <TabButton isSelected={selectedTopic === 'props'}
                    onClick={() => clickHandler('props')}>Props
                </TabButton>

                <TabButton isSelected={selectedTopic === 'state'}
                    onClick={() => clickHandler('state')}>State
                </TabButton>
                </>
            }>

            </Tabs>

            {!selectedTopic ? <p>Please select a Topic.</p> :

                (<div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
                )}
            {/*Se pueden usar tambien el operador && y otra forma es crear una variable,
        ingresarle el codigo de tab-content y ponerle un if(selectedTopic)*/}
        </Section>
    );
}