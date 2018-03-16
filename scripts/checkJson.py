# Python3 only
import json

if __name__ == '__main__':
    with open('../web/data/faq.json', ) as fd:
        faq = json.load(fd, encoding='utf-8')
        index = 0
        for element in faq:
            if 'question' not in element:
                print("Missing question at item %d. (%s)" % (index, element['reponse'][:32] + '...'))
            if 'reponse' not in element:
                print("Missing reponse at item %d. (%s)" % (index, element['question'][:32] + '...'))
            if 'theme' not in element:
                print("Missing theme at item %d. (%s)" % (index, element['question'][:32] + '...'))
            if 'branche' not in element:
                print("Missing branche at item %d. (%s)" % (index, element['question'][:32] + '...'))
            index += 1
