import {
    List,
    Table,
    useTable,
    TagField,
    useModalForm,
    EditButton,
 
} from "@pankod/refine-antd";
import { EditCustomers } from "components/customers";

import {EditTeamLead} from "components/team_lead/EditTeamLead";
import {TeamLeadcreate} from "components/team_lead/TeamLeadcreate";
import { ITeamlead } from "interfaces";

export const TeamLeadList: React.FC = () => {
    const { tableProps } = useTable<ITeamlead>();

    const { formProps, modalProps, show } = useModalForm({
        resource: "missions",
        action: "create",
    });

    const {
        modalProps: editModalProps,
        formProps: editFormProps,
        show: editShow
    } = useModalForm<ITeamlead>({
        action: "edit",
        metaData: { populate: ["logo"] },
    });

    return (
        <>
            <List
                createButtonProps={{
                    onClick: () => {
                        show();
                    },
                }}
            >
                <Table {...tableProps}>
                    <Table.Column dataIndex="id" title="ID" />
                    <Table.Column dataIndex="Name" title="Name" />
                    <Table.Column
                        dataIndex="Location"
                        title="Location"
                    />
                    <Table.Column dataIndex="Product" title="Products" />
                    <Table.Column
                        dataIndex="Date"
                        title=" Date"
                        render={(value) => (
                            <TagField value={value} color="red" />
                        )}
                    />
                    
                    <Table.Column<ITeamlead>
                        title="Actions"
                        dataIndex="actions"
                        key="actions"
                        render={(_value, record) => (
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                                onClick={() => editShow(record.id)}
                            />
                        )}
                    />
                </Table>
            </List>
            <TeamLeadcreate modalProps={modalProps} formProps={formProps} />
            <EditTeamLead
                modalProps={editModalProps}
                formProps={editFormProps}
            />
        </>
    );
};
