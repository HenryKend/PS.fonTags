/**
 * Created by ��� on 2015/11/7.
 */
(function ()
{

    var cs = new CSInterface();
    var WHITE = 0xFFFFFF, BLACK = 0x000000,
        DARK_LIGHT_SWITCH_COLOR = 0x888888,
        LIGHT1_2_SWITCH_COLOR = 0xCCCCCC,
        DARK1_2_SWITCH_COLOR = 0x444444;


    //----------------------------
    //ע�� PS ������ɫ�ı��¼�������
    cs.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, setUIColors);
    setUIColors();

    //---------------------------
    function setUIColors()
    {
        var skinInfo = cs.getHostEnvironment().appSkinInfo;

        if (skinInfo)
        {
            //��ȡ PS ��۱���ɫ
            var panelBgColor = toHex(skinInfo.panelBackgroundColor.color);

            //===���ý��汳��ɫΪ PS �������
            var body = document.getElementsByTagName("body");
            body[0].style.backgroundColor ="#"+ panelBgColor;


            //===�ж� PS ������ã��ɰ����� 4 �����𣬴���������� light1��2��dark1��2
            panelBgColor= "0x"+panelBgColor
            if(panelBgColor > DARK_LIGHT_SWITCH_COLOR)
            {
                if(panelBgColor > LIGHT1_2_SWITCH_COLOR)
                {
                    //light1
                    alert("light2")
                }
                else
                {
                    //light2
                    alert("light1")
                }
            }
            else
            {
                if(panelBgColor > DARK1_2_SWITCH_COLOR)
                {
                    //dark1
                    alert("dark1")
                }
                else
                {
                    //dark2
                    alert("dark2")
                }
            }
        }


    }


    //�� color ����ת��Ϊ 16�����ַ���
    function toHex(color, prefix, delta)
    {
        function computeValue(value, delta)
        {
            var computedValue = !isNaN(delta) ? value + delta : value;
            if (computedValue < 0)
            {
                computedValue = 0;
            }
            else if (computedValue > 255)
            {
                computedValue = 255;
            }

            computedValue = computedValue.toString(16);
            return computedValue.length == 1 ? "0" + computedValue : computedValue;
        }

        var hex = "";
        if (color)
        {
            with (color)
            {
                hex = computeValue(red, delta) + computeValue(green, delta) + computeValue(blue, delta);
            }
        }


            return  hex;

    }


})()


