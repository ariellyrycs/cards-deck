import CardContainer from '../CardContainer';
import { shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import * as Store from '../../context/store.js';


configure({ adapter: new Adapter() });

describe('<CardContainer />', () => {
    test('it should mock context', () => {
        const contextValues = {
            state: {
                cards: {
                    considered: [{
                        id: 0,
                        value: 1,
                        revealed: false
                    }, {
                        id: 1,
                        value: 2,
                        revealed: true
                    }],
                    unconsidered: []
                }
            }
        };

        jest
            .spyOn(Store, 'useAppContext')
            .mockImplementation(() => contextValues);
            
        const wrapper = shallow(<CardContainer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});