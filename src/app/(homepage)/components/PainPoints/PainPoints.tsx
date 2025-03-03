import { IconBulb, IconExclamationCircle } from "@tabler/icons-react";
import "./pain-points.scss";

export const PainPoints = () => {

    return (
        <div className="pain-points">

            <h2 className="headline">We got you covered!</h2>

            <div className="grid">
                <div className="grid__header">
                    <div className="grid__header__content">
                        <div className="grid__header__content__item grid__header__content__item--before">
                            <IconExclamationCircle />
                            Before
                            </div>
                        <div className="grid__header__content__item grid__header__content__item--after">
                            <IconBulb />
                            After</div>
                    </div>
                </div>
                <div className="grid__body">
                    <div className="grid__body__content">
                        <div className="grid__body__content__item grid__body__content__item--before">Environment inconsistencies between local and production</div>
                        <div className="grid__body__content__item grid__body__content__item--after">Identical containers across all environments</div>
                    </div>

                    <div className="grid__body__content">
                        <div className="grid__body__content__item grid__body__content__item--before">Complex DevOps setup for simple deployments</div>
                        <div className="grid__body__content__item grid__body__content__item--after">Push-to-deploy with zero configuration</div>
                    </div>

                    <div className="grid__body__content">
                        <div className="grid__body__content__item grid__body__content__item--before">Unpredictable scaling costs</div>
                        <div className="grid__body__content__item grid__body__content__item--after">Project-based pricing with unlimited deployments</div>
                    </div>

                    <div className="grid__body__content">
                        <div className="grid__body__content__item grid__body__content__item--before">Lack of developer-specific monitoring</div>
                        <div className="grid__body__content__item grid__body__content__item--after">Framework-aware metrics and logging</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

/* 

Pain Point 1: "Environment inconsistencies between local and production"
Solution: "Identical containers across all environments"


Pain Point 2: "Complex DevOps setup for simple deployments"
Solution: "Push-to-deploy with zero configuration"


Pain Point 3: "Unpredicgrid scaling costs"
Solution: "Project-based pricing with unlimited deployments"


Pain Point 4: "Lack of developer-specific monitoring"
Solution: "Framework-aware metrics and logging"


*/