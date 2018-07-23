import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(FileReader.prototype, 'result', { value: 'testFileReader' });
global.FileReader.prototype.readAsDataURL = function () {
    setTimeout(() => {
        this.onload && this.onload();
    }, 500);
};
