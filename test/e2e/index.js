import chai, {expect} from "chai";
import {spy} from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import {handler} from "index";
import {getEventFromObject, run} from "../mocks";
import stepPutInKinesis from "pipeline";

describe("`iwwa-lambda-events-subset-pipe`", () => {

    var mockPutRecords;

    beforeEach(() => {
        mockPutRecords = spy();
        stepPutInKinesis.__Rewire__("dispatchEvent", mockPutRecords);
    });

    afterEach(() => {
        stepPutInKinesis.__ResetDependency__("dispatchEvent");
    });


    describe("skips", () => {
        it("if given event is not of type `reading`", async () => {
            const event = getEventFromObject({
                data: {
                    id: "event-id",
                    element: {
                        sensorId: "sensor1",
                        date: "2016-01-28T00:15:00.000Z",
                        source: "reading",
                        measurements: [{
                            type: "activeEnergy",
                            value: 4.808,
                            unitOfMeasurement: "kWh"
                        }, {
                            type: "reactiveEnergy",
                            value: 0.315,
                            unitOfMeasurement: "kVArh"
                        }, {
                            type: "maxPower",
                            value: 0.9,
                            unitOfMeasurement: "VAr"
                        }]
                    }
                },
                type: "element inserted in collection readings"
            });

            await run(handler, event);
            expect(mockPutRecords).to.have.been.calledOnce;
            expect(mockPutRecords).to.have.been.calledWith(
                "element inserted in collection readings",
                {
                    id: "event-id",
                    element: {
                        sensorId: "sensor1",
                        date: "2016-01-28T00:15:00.000Z",
                        source: "reading",
                        measurements: [{
                            type: "activeEnergy",
                            value: 4.808,
                            unitOfMeasurement: "kWh"
                        }, {
                            type: "reactiveEnergy",
                            value: 0.315,
                            unitOfMeasurement: "kVArh"
                        }, {
                            type: "maxPower",
                            value: 0.9,
                            unitOfMeasurement: "VAr"
                        }]
                    }
                }
            );
        });
    });

});
