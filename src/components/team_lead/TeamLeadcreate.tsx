import {
    Modal,
    Form,
    Input,
    ModalProps,
    FormProps,
    Upload,
    DatePicker,
} from "@pankod/refine-antd";
import { useApiUrl } from "@pankod/refine-core";
import { TOKEN_KEY } from "../../constants";
import {
    useStrapiUpload,
    getValueProps,
} from "@pankod/refine-strapi-v4";


type TeamLeadcreateProps = {
    modalProps: ModalProps;
    formProps: FormProps;
};


export const TeamLeadcreate: React.FC<TeamLeadcreateProps> = ({
    modalProps,
    formProps,
}) => {
    const { ...uploadProps } = useStrapiUpload({
        maxCount: 1,
    });
    const API_URL = useApiUrl();
    return (
        <Modal {...modalProps} title="Create  Customer Details">
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Customer name "
                    name="name" 
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label=" Annual Earning" name="Annual_earning">
                    <Input />
                </Form.Item>

                <Form.Item label="Company Logo">
                    <Form.Item
                        name={"logo"}
                        valuePropName="fileList"
                        getValueProps={(data) => getValueProps(data, API_URL)}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            name="files"
                            action={`${API_URL}/upload`}
                            headers={{
                                Authorization: `Bearer ${localStorage.getItem(
                                    TOKEN_KEY
                                )}`,
                            }}
                            listType="picture"
                            multiple
                            {...uploadProps}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item label=" Created By" name="Created_by">
                    <Input />
                </Form.Item>
                <Form.Item label="Date of creation" name="Date_of_creation">
                    <DatePicker format={Date} />
                    </Form.Item>
                
            </Form>
        </Modal>
    );
};