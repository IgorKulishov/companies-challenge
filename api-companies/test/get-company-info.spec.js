'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const getCompany = require('../controllers/get-company-info');
const db = require('../db/init');

describe('get company', () => {
    let querySpy = sinon.spy();
    beforeEach(() => {
        sinon.stub(db, 'init').resolves({
            query: querySpy
        });
    });
    afterEach(() => {
        querySpy.resetHistory();
        db.init.restore();
    });
    it('was able to get company information', async () => {
        const mockLambdaCallback = sinon.spy();
        const companyId = 1;
        await getCompany.getByCompanyId({ path: { id: companyId } }, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to get company information', async () => {
        const mockLambdaCallback = sinon.spy();
        await getCompany.getByCompanyId({path: {id: undefined}}, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
