import "./pain-points.scss";

export const PainPoints = () => {

    return (
        <div className="pain-points">

            <h2 className="headline">We got you covered!</h2>

            <table className="table">
                <tr className="table__header">
                    <th className="table__header__content table__header__content--before">Before</th>
                    <th className="table__header__content table__header__content--after">After</th>
                </tr>

                <tr className="table__body">
                    <td className="table__body__content table__body__content--before">Environment inconsistencies between local and production</td>
                    <td className="table__body__content table__body__content--after">Identical containers across all environments</td>
                </tr>

                <tr className="table__body">
                    <td className="table__body__content table__body__content--before">Complex DevOps setup for simple deployments</td>
                    <td className="table__body__content table__body__content--after">Push-to-deploy with zero configuration</td>
                </tr>

                <tr className="table__body">
                    <td className="table__body__content table__body__content--before">Unpredictable scaling costs</td>
                    <td className="table__body__content table__body__content--after">Project-based pricing with unlimited deployments</td>
                </tr>

                <tr className="table__body">
                    <td className="table__body__content table__body__content--before">Lack of developer-specific monitoring</td>
                    <td className="table__body__content table__body__content--after">Framework-aware metrics and logging</td>
                </tr>
            </table>
        </div>

    );
};

/* 

Pain Point 1: "Environment inconsistencies between local and production"
Solution: "Identical containers across all environments"


Pain Point 2: "Complex DevOps setup for simple deployments"
Solution: "Push-to-deploy with zero configuration"


Pain Point 3: "Unpredictable scaling costs"
Solution: "Project-based pricing with unlimited deployments"


Pain Point 4: "Lack of developer-specific monitoring"
Solution: "Framework-aware metrics and logging"


*/